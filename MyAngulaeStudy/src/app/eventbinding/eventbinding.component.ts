import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isActive:boolean=false;
  mystyle={
    'background':'red',
  'border':'10px solid green'}
  msg:string="";
  Active='active';
  change()
  {
    this.msg="This is event binding";
  }
  changdata()
  {
    this.isActive=true;
  }
  oninputClick(event:any)
  {
    console.log(event.target.value);
  }
  Product(event:any)
  {
    this.msg=event.target.value+"Added in ypur card"
  }
  
}
