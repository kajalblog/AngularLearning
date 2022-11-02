import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
// import { decode } from 'querystring';
import { GlobalConstant } from '../shared/global-constant';
import { AuthService } from './auth.service';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth:AuthService,public router:Router,private sanckbar:SnakbarService) { }
  canActivate(route:ActivatedRouteSnapshot):boolean
  {
    debugger
    let expectedArr=route.data;
    expectedArr=expectedArr.expextedRole;

    var token:any=localStorage.getItem('token');
    var tokenpayLoad:any;
    try
    {
      tokenpayLoad=jwt_decode(token);

    }
    catch(err)
    {
        // localStorage.clear();
        this.router.navigate(["/"])
    }
    let checkRole=false;

    for(let i=0;i<expectedArr.lenth;i++)
    {
      if(expectedArr[i]==tokenpayLoad.role)
      {
        checkRole=true;
      }

    }
    if(tokenpayLoad.role=='user' || tokenpayLoad=='admin')
    {
      if(this.auth.isAuthenticate() && checkRole)
      {
        return true
      }
      this.sanckbar.openSnakbar(GlobalConstant.unauthorized,GlobalConstant.error);
      this.router.navigate(['/cafe/dashboard']);
      return true;

    }
    else{
         this.router.navigate(['/']);
        //  localStorage.clear();
         return false
    }
  }
}
