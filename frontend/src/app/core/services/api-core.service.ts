import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Execute an HTTP request.
   * @param url
   * @param method
   * @param body
   * @param params
   * @param headers
   * @param responseType
   */
  execute(
    url: string,
    method: string = HttpMethod.GET,
    body: any = undefined,
    params: any = {},
    headers: HttpHeaders = new HttpHeaders(),
    responseType: 'json' | "blob" |undefined = "json"
  ): Observable<any> {
    return this.httpClient.request(
      method,
      environment.base_api_url+url,
      {
        body: body,
        params: params,
        headers: headers,
        reportProgress: true,
        responseType: responseType
      }
    );
  }
}

export class HttpMethod {
  static GET: string = "GET";
  static POST: string = "POST";
  static PUT: string = "PUT";
  static DELETE: string = "DELETE";
}
