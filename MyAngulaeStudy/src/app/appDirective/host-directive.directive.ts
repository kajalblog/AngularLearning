import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostDirective]'
})
export class HostDirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    
  }
  @HostListener('click') Myclick()
  {
    // alert("clicked");
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','lightgray');
  }
  @HostListener('mouseover') MymouserOver()
  {
    // alert("mouseOver");
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','pink');
  }
  @HostListener('mouseout') MymouseOut()
  {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white');
  }

}
