import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 

    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

  changeColorbyVal(color:any)
  {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
  }

}
