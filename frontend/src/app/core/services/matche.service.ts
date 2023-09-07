import { Injectable } from '@angular/core';
import {ApiCoreService, HttpMethod} from "./api-core.service";
import {Observable} from "rxjs";
import {Team} from "../models/team";
import {Player} from "../models/player";
import {Matche} from "../models/matche";

@Injectable({
  providedIn: 'root'
})
export class MatcheService {

  readonly  ContextPath = "/matches";
  constructor(private  client: ApiCoreService) {

  }

  all(): Observable<Matche[]>{
    return this.client.execute(this.ContextPath,HttpMethod.GET)
  }

  update(data:any, id:number): Observable<Matche>{
    return this.client.execute(this.ContextPath+'/'+id,HttpMethod.POST,data)
  }

  getMatche(matcheId: number) {
    return this.client.execute(this.ContextPath+'/'+matcheId,HttpMethod.GET)
  }
}
