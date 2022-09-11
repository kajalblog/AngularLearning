import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  ProductSelected:boolean=false;
selectedProduct:string='';
onAddedToCart:any;

  constructor() { }

  ngOnInit(): void {
  }
  selectProduct(product:any)
  {
    this.ProductSelected=true;
this.selectedProduct=product;
  }
  AddedProduct()
  {
    this.onAddedToCart=this.selectedProduct;
  }
  onAdded(prodata:any)
  {this.onAddedToCart=prodata;
  }

}
