import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  @Input() ProductSelected:boolean=false;
  @Input() selectedProduct:string='';
  @Output() onAddedToCart=new EventEmitter<any>();
  constructor() { }

@Input() placeholderText:string="search";
  ngOnInit(): void {
  }
  AddedProduct()
  {
    this.onAddedToCart.emit(this.selectedProduct);
  }
}
