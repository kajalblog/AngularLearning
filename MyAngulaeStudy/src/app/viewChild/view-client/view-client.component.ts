import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from 'src/app/appDirective/test-directive.directive';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit,AfterViewInit {
  @Input() addedvalue:string='';
  @ViewChild('box')
  box!: ElementRef; 

  @ContentChild('childComp') childPara!:ElementRef;

  @ViewChild(TestDirectiveDirective) myDir!:TestDirectiveDirective; //imported test directive
  myvalue:string="Default value";
  constructor(public renderer:Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor="pink";
    this.box.nativeElement.classList="classPink";
    
    this.renderer.setStyle(this.childPara.nativeElement,'color','red');
  }
  clickme()
  {
   alert(this.myvalue);
   var text=this.renderer.createText("this text is crested")
   this.renderer.appendChild(this.childPara.nativeElement,text);

  }
  changeColor(color:any)
  {
    this.myDir.changeColorbyVal(color);
  }
  

}
