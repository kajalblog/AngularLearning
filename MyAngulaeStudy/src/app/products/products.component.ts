import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../Service/appservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _magService:AppserviceService ,private router:Router) { }
  product={};
  ngOnInit(): void {
    this.product=this._magService.product.name;
    // this.product=this._magService.product.id;
  }
  
  msgShow()
  {
    // this._magService.messageAlert();
    this.router.navigate(['/products'])
  }
}
