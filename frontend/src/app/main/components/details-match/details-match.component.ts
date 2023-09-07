import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthUser} from "../../../core/models/auth-user";
import {Subscription} from "rxjs";
import {Matche} from "../../../core/models/matche";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatcheService} from "../../../core/services/matche.service";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.css']
})
export class DetailsMatchComponent implements OnInit,OnDestroy{
  public authUser: AuthUser = new AuthUser();
  private subscriptionAuthUser?: Subscription;
  environment = environment


  public match: Matche | undefined;

  private  routeId: number;

  public  link : string = ""
  public  shareLinkedin : string = ""


  constructor(private matcheService: MatcheService,private  route: ActivatedRoute, private  authService: AuthenticationService,private router: Router) {
    this.subscribeOnAuthUser();
    this.routeId = Number(this.route.snapshot.params['id']);
    this.link = environment.base_api_url+'matches/details/'+this.routeId;
    this.loaddetails(this.routeId)
  }




  ngOnInit(): void {

  }

  loaddetails(matcheId: number){
    this.matcheService.getMatche(matcheId).subscribe({
      next: value => {
          this.match = value;
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



}
