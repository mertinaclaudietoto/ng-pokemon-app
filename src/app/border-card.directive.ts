import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(200);
    this.setBorder('#f5f5f5');
   }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');

  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
    
  }

  setHeight(heigth:number){
    this.el.nativeElement.style.height=`${heigth}px`;
  }
  setBorder(color:string){
    this.el.nativeElement.style.border=`solid 4px ${color}`;
  }
}
