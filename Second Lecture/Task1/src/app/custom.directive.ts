import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[customDirective]'
})

export class CustomDirective{
    @Input() backGroundColor:string;
constructor(private elementRef:ElementRef, private renderer:Renderer2){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','red');  
}
}