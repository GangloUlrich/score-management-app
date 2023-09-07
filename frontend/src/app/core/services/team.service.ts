import { Injectable } from '@angular/core';
import {ApiCoreService, HttpMethod} from "./api-core.service";
import {Observable} from "rxjs";
import {Team} from "../models/team";
import {Player} from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly  ContextPath = "/teams";
  readonly  ContextPathPlayer = "/players";
  constructor(private  client: ApiCoreService) {

  }

  all(): Observable<Team[]>{
    return this.client.execute(this.ContextPath,HttpMethod.GET)
  }

  add(data:any): Observable<Team>{
    return this.client.execute(this.ContextPath,HttpMethod.POST,data)
  }

  addPlayer(data:any): Observable<Player>{
    return this.client.execute(this.ContextPathPlayer,HttpMethod.POST,data)
  }


}
