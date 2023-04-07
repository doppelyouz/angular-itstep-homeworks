import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

const enum colors {
  red = 'red',
  yellow = 'yellow',
  green = 'green',
  blue = 'blue',
}

@Directive({
  selector: '[appColorizeBorder]',
})
export class ColorizeBorderDirective implements OnInit {
  @Input() date!: string;

  constructor(private element: ElementRef, private ref: Renderer2) {}

  ngOnInit() {
    this.checkDate()
  }

  checkDate() {

    const publicationDate = new Date(this.date);
    const currentDate = new Date();
    const differenceInDays = Math.floor((currentDate.getTime() - publicationDate.getTime()) / (1000 * 3600 * 24));
    if (differenceInDays > 180) {
      this.colorize(colors.red);
    }
    else if (differenceInDays > 30 && differenceInDays <= 180) {
      this.colorize(colors.yellow);
    }
    else if (differenceInDays > 7 && differenceInDays <= 30) {
      this.colorize(colors.green);
    } else {
      this.colorize(colors.blue);
    }
  }

  colorize(color: colors) {
    this.ref.setStyle(this.element.nativeElement, 'border-bottom-color', color);
  }
}
