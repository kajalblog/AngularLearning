import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprrtybinding',
  templateUrl: './proprrtybinding.component.html',
  styleUrls: ['./proprrtybinding.component.css']
})
export class ProprrtybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="Kajal";
  appStatus:boolean=true;
  status1:string="Online";
  status2:string="Offline";

}
