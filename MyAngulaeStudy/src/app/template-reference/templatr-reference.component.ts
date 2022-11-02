import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatr-reference',
  templateUrl: './templatr-reference.component.html',
  styleUrls: ['./templatr-reference.component.css']
})
export class TemplatrReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changedata(data:any)
  {
    console.log(data.name);
    console.log(data.value)
  }
  SelectColor:any;
  
}
