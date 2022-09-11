import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/Service/appservice.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor( private ser:AppserviceService) { }

myvalue:string="";
  Adduser(mydata:any)
  {
    this.myvalue=mydata.value;
  }
  mydataval:any[]=[];
  ngOnInit(): void {
    this.mydataval=this.ser.dumpyData;
  }

}
