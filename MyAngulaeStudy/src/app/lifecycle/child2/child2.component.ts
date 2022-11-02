import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit ,AfterViewChecked,OnDestroy{
  @Input() myvalue:string="";
  constructor() { 
    console.log("constructor called");
  }
ngOnChanges(changes: SimpleChanges): void {
  // console.log("ngOnchanges called");
  // console.log(changes);
  console.log("ngOnChanges called",changes.myvalue.currentValue);
}
 
  // @Output() inputEvent= new EventEmitter;
  ngOnInit(): void {
    console.log("ngOnInit Called")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Called")
  }
  ngAfterContentInit(): void {
    console.log(
      "ngAfterContentinit called"
    )
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }
  ngAfterViewInit(): void {
    
    console.log("ngAfterViewInit called")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
 

}
