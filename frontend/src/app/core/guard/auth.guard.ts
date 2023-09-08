import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";
import {AuthUser} from "../models/auth-user";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements OnDestroy,CanActivate {
  public authUser: AuthUser = new AuthUser();

  private subscriptionAuthUser?: Subscription;

  constructor(private  authService: AuthenticationService, private  router: Router) {
    this.subscribeOnAuthUser();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authUser.isValid){
      return  true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }


  ngOnDestroy() {
    this.subscriptionAuthUser?.unsubscribe();
  }

  private subscribeOnAuthUser() {
    this.subscriptionAuthUser = this.authService
      .authUser
      .subscribe( (authUser: AuthUser) => {
        this.authUser = authUser;
        console.log(this.authUser)
      });
  }

}
