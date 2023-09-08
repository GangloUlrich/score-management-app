import {Component, Input, OnDestroy} from '@angular/core';
import {AuthenticationService} from "../../core/services/authentication.service";
import {AuthUser} from "../../core/models/auth-user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnDestroy{
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
        console.log(this.authUser)
      });
  }


  logout(){
    this.authUserService.logout();
  }

}
