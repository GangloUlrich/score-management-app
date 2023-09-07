import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthUser} from "../../../core/models/auth-user";
import {Subscription} from "rxjs";
import {Team} from "../../../core/models/team";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeamService} from "../../../core/services/team.service";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Matche} from "../../../core/models/matche";
import {MatcheService} from "../../../core/services/matche.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements  OnInit, OnDestroy{
  public authUser: AuthUser = new AuthUser();
  private subscriptionAuthUser?: Subscription;

  public matches: Matche[] = [];
  public upcomingMatches: Matche[] = [];
  public finishedMatches: Matche[] = [];

  displayModal = false;
  public matcheForm: FormGroup;
  public selectedMatch: Matche | undefined;

  constructor(private matcheService: MatcheService, private formBuilder: FormBuilder, private  authService: AuthenticationService,private router: Router) {
    this.subscribeOnAuthUser();
    this.matcheForm = this.formBuilder.group({
      score_home:['',Validators.required],
      score_away:['',Validators.required],
      card_home:['',Validators.required],
      card_away:['',Validators.required],
      pos_home: ['', Validators.required],
      pos_away: ['', Validators.required],
    })
  }




  ngOnInit(): void {
    this.loadMatches()
  }

  loadMatches(){
    this.matcheService.all().subscribe({
      next: value => {
        this.matches = value;
        this.upcomingMatches = this.matches.filter(item=> item.status == "upcoming");
        this.finishedMatches = this.matches.filter(item=> item.status == "finished");
      }

    })
  }

  ngOnDestroy() {
    this.subscriptionAuthUser?.unsubscribe();
  }

  private subscribeOnAuthUser() {
    this.subscriptionAuthUser = this.authService
      .authUser
      .subscribe( (authUser: AuthUser) => {
        this.authUser = authUser;
      });
  }

  showForm(item: Matche){
    this.selectedMatch = item;
    console.log(this.selectedMatch)
    this.matcheForm.reset();
    this.displayModal = true;
  }



  updateMatcheScore() {
    let data = this.matcheForm.value;
    data.home_team = this.selectedMatch?.home_team?.id
    data.away_team = this.selectedMatch?.away_team?.id
      this.matcheService.update(data,this.selectedMatch!.id).subscribe(
        {
          next: value => {
            this.router.navigate(['matches/details/' + this.selectedMatch!.id])
            this.selectedMatch = undefined;
            this.matcheForm.reset();
            this.displayModal = false;
          }
        }
      )
    }

  details(item: Matche) {
    this.router.navigate(['/matches/details/'+item.id])
  }
}
