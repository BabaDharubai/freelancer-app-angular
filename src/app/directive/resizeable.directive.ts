import { Directive, ElementRef, OnInit,Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[resizeColumn]'
})
export class ResizeableDirective {
  private initialWidth: number | undefined |null;
  private startX!: number;
  private element: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    if (event.offsetX > this.element.offsetWidth - 10) {
      this.initialWidth = this.element.offsetWidth;
      this.startX = event.clientX;
    }
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.initialWidth) {
      const width = this.initialWidth + event.clientX - this.startX;
      this.renderer.setStyle(this.element, 'width', `${width}px`);
    }
  }

  @HostListener('document:mouseup') onMouseUp() {
    this.initialWidth = null;
  }
}
