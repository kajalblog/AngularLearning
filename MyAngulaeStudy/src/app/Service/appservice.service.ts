import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }
  messageAlert()
  {
    alert("Thank you for subscribe");
  }
  apiData():Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  product={name:"Laptop",id:"0001"};

  dumpyData=[
    {name:"Kajal",id:"011"},
    {name:"Pratiksha",id:"012"},
    {name:"Kavita",id:"013"},
    {name:"Kajal",id:"014"},
  ]
  headerContact=new BehaviorSubject(false);
  headerLogin=new BehaviorSubject(true);
  loginUser=new BehaviorSubject(false);

}
