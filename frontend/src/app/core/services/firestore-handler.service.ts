import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHandlerService {


  constructor() { }

  /**
   *
   * @param data
   */
  buildListDataItem(data: Array<any>): Array<any> {
    return data.map( (e: any) => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      } as {};
    });
  }

  /**
   *
   * @param data
   */
  buildDataItem(data: any): any {
    if(!data.data()) return null;
    return {
      id: data.id,
      ...data.data()
    } as {};
  }
}
