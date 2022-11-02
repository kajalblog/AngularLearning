import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ViewClientComponent } from '../view-client/view-client.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit,AfterViewInit {
  addedvalue:string="";
  @ViewChild('box') box!:ElementRef;
  @ViewChild(ViewClientComponent) child!:ViewClientComponent;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  addData(data:any)
  {
    // console.log(data.value);
    this.addedvalue=data.value;
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red');
    this.renderer.setStyle(this.box.nativeElement,'color','white');
    this.renderer.setAttribute(this.box.nativeElement,'title','this is test title');
    console.log(this.child)

  }
  getchildval()
  {
    this.child.myvalue="Angular";
  }
  getchildmethod()
  {
    this.child.clickme();
  }
  
}
