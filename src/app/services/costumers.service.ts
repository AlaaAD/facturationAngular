import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumersService {
  host = 'http://localhost:8888/CUSTOMER-SERVICE';

  constructor(private http: HttpClient){}

  public getCustomers(){
    return this.http.get(this.host+"/customers");
  }

}
