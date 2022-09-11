import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  studentList!: any[];
  citylist = ["Mumbai"];
  city1:string='';
  isShow!:boolean;

  constructor() { 
    this.isShow=false;
  }
  
  ngOnInit(): void {
    this.studentList = [
      {name: "kajal", city: "Pandharpur", stream: "IT"},
      {name: "kajal", city: "Pandharpur", stream: "IT"},
      {name: "kajal", city: "Pandharpur", stream: "IT"},
      {name: "kajal", city: "Pandharpur", stream: "IT"}
    ]
  }
  show()
  {
    this.isShow=true;
  }
  hide()
  {
    this.isShow=false;
  }
  getVisible()
  {
    return this.isShow;
  }

  addCity()
  {
    this.citylist.push(this.city1);
  }

  getStudentList()
  {
    return this.studentList;
  }
  Myclass = 'myclass';
  isActive: boolean = true;
  products = [
    { name: "Laptop" },
    { name: "TV" },
    { name: "Mobile" },
    { name: "Washing Machine" },

  ]




}
