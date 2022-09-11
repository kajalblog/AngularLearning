import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  variableName:string='classcolor classstyle';
  booleanValue:boolean=false;
  mypro:boolean=true;
  mystyle:string="30px";
  isActive:boolean=false;
  objectvalue={
    classcolor:true,
    class2:false,
    classstyle:!this.booleanValue
  }
  multiStyle={
    'background':'red',
    'border':'10px solid green'
}
  stylecolor="orange";
  changecolor()
  {
    this.stylecolor="red"
  }

}
