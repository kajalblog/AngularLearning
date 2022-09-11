import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../Service/appservice.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {

  constructor(private srcv:AppserviceService) { }

  fetchData:any;

  ngOnInit(): void {
    this.srcv.apiData().subscribe(mydata=>{
      console.log(mydata);
      this.fetchData=mydata;
    })
  }


}
