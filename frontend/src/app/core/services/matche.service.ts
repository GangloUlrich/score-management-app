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

  readonly ContextPath = "/matches";
  readonly ContextPathExport = "/exports";

  constructor(private client: ApiCoreService) {

  }

  all(): Observable<Matche[]> {
    return this.client.execute(this.ContextPath, HttpMethod.GET)
  }

  update(data: any, id: number): Observable<Matche> {
    return this.client.execute(this.ContextPath + '/' + id, HttpMethod.POST, data)
  }

  getMatche(matcheId: number) {
    return this.client.execute(this.ContextPath + '/' + matcheId, HttpMethod.GET)
  }

  exportMatchesScores() {
    return this.client.execute(this.ContextPathExport + '/matches',
      HttpMethod.GET,
      undefined,
      undefined,
      undefined,
      "blob")
  }

  openFileInBrowserTargetBlank(filename:string,data: any): void {
    var file = new Blob([data], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file)
    let link = document.createElement('a');
    link.href = fileURL;
    link.download = filename;
    link.click();
    window.open(fileURL, '_blank');
  }
}
