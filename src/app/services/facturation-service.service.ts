import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturationServiceService {
  host = 'http://localhost:8888/BILLING-SERVICE';

  constructor(private http: HttpClient){}
  getFacturation(id:number): Observable<any>{
    return this.http.get(this.host + '/bills/'+id);
  }
  public getFacturations(){
    return this.http.get(this.host+"/bills");
  }


}
