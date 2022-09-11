import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() placeholder:string="";
@Input() boxColor:string='';

@Output() inputEvent=new EventEmitter;

count:number=0;
onCreate(mydata:any){
  if(mydata.value.length>0)
  {
    this.count=this.count+1;
    // alert(mydata.value);
    this.inputEvent.emit(mydata.value);
  }
 
}
}
