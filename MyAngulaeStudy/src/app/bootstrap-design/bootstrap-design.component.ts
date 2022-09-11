import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-design',
  templateUrl: './bootstrap-design.component.html',
  styleUrls: ['./bootstrap-design.component.css']
})
export class BootstrapDesignComponent implements OnInit {

  colval='blue';
  bgcolor='gray';
  isActive!:boolean;
  constructor() { 
    this.isActive=true;
  }

  ngOnInit(): void {
  }
  showPanel()
  {
    this.isActive=false;
  }

}
