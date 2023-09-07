import { Injectable } from '@angular/core';
import {ApiCoreService, HttpMethod} from "./api-core.service";
import {Observable} from "rxjs";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly  ContextPath = "/teams"
  constructor(private  client: ApiCoreService) {

  }

  all(): Observable<Team[]>{
    return this.client.execute(this.ContextPath,HttpMethod.GET)
  }

  add(data:any): Observable<Team>{
    return this.client.execute(this.ContextPath,HttpMethod.POST,data)
  }


}
