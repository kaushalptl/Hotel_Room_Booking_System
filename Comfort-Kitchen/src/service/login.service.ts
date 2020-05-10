import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Customer} from 'src/Interface/customer'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClientModule) { }

  // login():Observable<Customer[]>{

  //   return this.http.get<Customer[]>('http')
  // }
}
