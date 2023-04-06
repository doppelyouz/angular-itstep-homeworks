import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverable]'
})
export class HoverableDirective {
  @Input() hoverColor: string | undefined;
  @HostBinding('style.color') color: string;
  @HostBinding('style.font-weight') fontWeight: string;

  constructor() {
    this.color = 'black';
    this.fontWeight = 'normal';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = this.hoverColor || 'black';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'black';
    this.fontWeight = 'normal';
  }
}
