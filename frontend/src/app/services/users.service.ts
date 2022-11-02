import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url=environment.apiUrl;

  constructor(private http:HttpClient,) { }

  signUp(data:any)
  {
    return this.http.post(this.url+'/cafe/createUser',data,{
      headers:new HttpHeaders().set('content-type','application/json')
    })
  }
  login(data:any)
  {
    return this.http.post(this.url+'/cafe/login',data,{
      headers:new HttpHeaders().set('content-type','application/json')
    })
  }
  checkOut()
  {
    return this.http.get(this.url+'/cafe/checkout')

  }
}
