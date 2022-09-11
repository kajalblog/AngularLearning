import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  proselected:boolean=false;
  selectedProduct:string="";
  addedProduct:any;
  onSelect(product:any)
  {
    this.proselected=true;
    this.selectedProduct=product;
    
  }
  onaddProducr()
  {
    this.addedProduct=this.selectedProduct;
  }
  myvalue:string="Angular"
  myText:string="Enter Your Name";
  onAddedProduct(prodata:any)
  {
    this.addedProduct=prodata;
  }

}
