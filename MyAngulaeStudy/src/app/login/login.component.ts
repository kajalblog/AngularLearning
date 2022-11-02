import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../Service/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _appservice:AppserviceService,public router:Router) { }

  ngOnInit(): void {
    // this._appservice.headerLogin.next(true);
  }
  Login(username:any)
  {
    alert(username.value);
    this.router.navigate(['./contact']);
    this._appservice.loginUser.next(true);
  }

}
