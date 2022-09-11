import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // placeholder:string="Enter  name"
  users:string[]=[];
  AddUser(data:any)
  {
    this.users.push(data);
  }
  removeUser(val:any)
  {
    this.users.splice(val,1);
  }
  Admindata:string[]=[];
  addAdmin(admindata:any)
  {
    this.Admindata.push(admindata);
  }

}
