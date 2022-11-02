import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from './appDirective/test-directive.directive';
import { AppserviceService } from './Service/appservice.service';
// import { ApiserviceService } from './Service/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'MyAngulaeStudy';
  headerLogin:boolean=false;
  headerContact!:boolean;
  loginUser!:boolean; 

  @ViewChild(TestDirectiveDirective) myDir!:TestDirectiveDirective;
  constructor(public _appservice:AppserviceService) { 
   
  }
  ngOnInit(): void {
    this._appservice.headerContact.subscribe(res=>{
      this.headerContact=res;
    })
    this._appservice.headerLogin.subscribe(res=>{
      this.headerLogin=res;
    })
    // this._appservice.loginUser.subscribe(res=>{
    //   this.loginUser=res;
    // })
  }
  ngAfterViewInit(): void {
   
  }
  changebg(color:any)
  {
    this.myDir.changeColorbyVal(color);
  }
}

 
