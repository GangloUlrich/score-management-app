import {Component, OnDestroy} from '@angular/core';
import {AuthenticationService} from "../core/services/authentication.service";
import {Subscription} from "rxjs";
import {AuthUser} from "../core/models/auth-user";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnDestroy{
  public authUser: AuthUser = new AuthUser();

  private subscriptionAuthUser?: Subscription;
  constructor(private  authUserService: AuthenticationService) {
    this.subscribeOnAuthUser();
  }

  ngOnDestroy() {
    this.subscriptionAuthUser?.unsubscribe();
  }

  private subscribeOnAuthUser() {
    this.subscriptionAuthUser = this.authUserService
      .authUser
      .subscribe( (authUser: AuthUser) => {
        this.authUser = authUser;

      });
  }


}
