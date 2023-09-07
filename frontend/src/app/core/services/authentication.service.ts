import { Injectable } from '@angular/core';
import {ApiCoreService, HttpMethod} from "./api-core.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {AuthUser} from "../models/auth-user";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private storage: Storage;
  private _authSubjectBehavior: BehaviorSubject<AuthUser> = new BehaviorSubject<AuthUser>(new AuthUser());
  public authUser: Observable<AuthUser> = this._authSubjectBehavior.asObservable();
  constructor(private requester: ApiCoreService) {
    this.storage = localStorage;
    this.getAuthenticatedUser();
  }

  register(data:any): Observable<User> {
    return this.requester.execute('/register',HttpMethod.POST,data);
  }

  login(data:any): Observable<void> {
    return this.requester.execute('/login',HttpMethod.POST,data).pipe(
      map(data => {
        let authUser = new AuthUser();
        authUser = Object.assign(data);
        this.saveDataInLocalStorage('authUser',authUser,true);
        this._authSubjectBehavior.next(authUser);
      })
    );
  }

  public saveDataInLocalStorage(key: string, data: any, isJsonData: boolean = true): void {
    if (data) {
      if (!isJsonData) {
        this.storage.setItem(key,data);
      } else {
        this.storage.setItem(key, JSON.stringify(data));
      }
    }
  }

  public getDataInLocalStorage(key: string, isJsonData: boolean = true): any {
    const data = this.storage.getItem(key);
    if (data != null) {
      if (!isJsonData) {
        return data;
      } else {
        return JSON.parse(data);
      }
    }
    return null;
  }

  public removeDataInLocalStorage(key: string): void {
    this.storage.removeItem(key);
  }

  public getAccessToken(): string {
    return this._authSubjectBehavior.getValue().token;
  }


  logout(){
    this.removeDataInLocalStorage('authUser');
    this._authSubjectBehavior.next(new AuthUser());

  }

  remoteLogout(){
    return this.requester.execute('/logout',HttpMethod.POST)
  }

  private getAuthenticatedUser() {
    let authUser = this.getDataInLocalStorage('authUser');
    if (!!authUser) {
      authUser = Object.assign(new AuthUser(), authUser);
      this._authSubjectBehavior.next(authUser);
    }
  }
}
