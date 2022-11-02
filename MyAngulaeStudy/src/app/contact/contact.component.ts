import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppserviceService } from '../Service/appservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {

  constructor(public _appservice:AppserviceService) { }

  ngOnInit(): void {
    this._appservice.headerContact.next(true);
  }
 ngOnDestroy(): void {
   
  this._appservice.headerContact.next(false);
 }
}
