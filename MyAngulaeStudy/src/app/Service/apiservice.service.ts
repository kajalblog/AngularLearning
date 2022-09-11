import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http:HttpClient) { }

  postData(data:any): Observable<any>
  {
    return this.http.post("http://localhost:3000/posts", data).pipe(map(res => {
      return res;
    }));
  }
  getData(): Observable<any>
  {
    return this.http.get("http://localhost:3000/posts").pipe(map(res => {
      return res;
    }));
  }
  updateData(data:any,id:number): Observable<any>
  {
    return this.http.put("http://localhost:3000/posts/"+id,data).pipe(map(res=>{
      return res;
    }))
  }
  deleteData(id:number): Observable<any>
  {
    return this.http.delete("http://localhost:3000/posts/"+id).pipe(map(res=>{
      return res;
    }))
  }

  getState(statelist: any) {
    return this.http.post('https://countriesnow.space/api/v0.1/countries/states', statelist);
  }
  getCity(cityList: any) {
    return this.http.post('https://countriesnow.space/api/v0.1/countries/state/cities', cityList)
  }
}
