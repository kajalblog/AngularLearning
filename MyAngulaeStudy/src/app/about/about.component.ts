import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = "This is pipes demo";
  val1 = "'it\\'s non-trivial question'"
  date = new Date();
  searchInput:any='';

  customval = "This is custom pipes";

  newArray = [
    "kajal ",
    "Amol jadhav", "Priyanka bansode", "Kavita shelke", "Gorakh kharat"
  ]
  ProductArr = [
    {
      srno: 1,
      name: 'Mobile',
      price: 25000,
      avalibility: 'Available'
    },
    {
      srno:2,
      name: 'TV',
      price: 55000,
      avalibility: 'Available'
    },
    {
      srno: 3,
      name: 'Fan',
      price: 2500,
      avalibility: 'Available'
    },
    {
      srno: 4,
      name: 'washing machine',
      price: 65000,
      avalibility: ' Not Available'
    },
    {
      srno: 5,
      name: 'Laptop',
      price: 55000,
      avalibility: 'Available'
    },
    {
      srno: 6,
      name: 'AV',
      price: 45000,
      avalibility: 'Available'
    }
  ]
}
