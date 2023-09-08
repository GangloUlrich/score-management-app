import {User} from "./user";

export class AuthUser {
  user?:User;
  token:string = "";

  get isOrdinaryUser(){
    return this.user?.role == "user";
  }

  get isAdmin(){
    return this.user?.role == "admin";
  }

  get isValid(): boolean {
    return !!this.token;
  }

}

