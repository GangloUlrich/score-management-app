import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from "../../../core/models/team";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeamService} from "../../../core/services/team.service";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {AuthUser} from "../../../core/models/auth-user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnDestroy{
  public authUser: AuthUser = new AuthUser();

  private subscriptionAuthUser?: Subscription;
  public teams: Team[] = [];
  visible = false;

  public teamForm: FormGroup;

  constructor(private teamService: TeamService, private formBuilder: FormBuilder, private  authService: AuthenticationService) {
    this.subscribeOnAuthUser();
    this.teamForm = this.formBuilder.group({
      name:['',Validators.required],
      coach:['',Validators.required],
    })
  }




  ngOnInit(): void {
    this.loadTeams()
  }

  loadTeams(){
    this.teamService.all().subscribe({
      next: value => this.teams = value
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

  showForm(){
    this.teamForm.reset();
    this.visible = true;
  }

  saveTeam() {
    if(this.teamForm.valid){
      this.teamService.add(this.teamForm.value).subscribe({
        next: value => this.teams.unshift(value)
      })
    }

  }
}
