export class Marker {
  color: string = 'black';
  inkQuantity: number = 100;

  constructor(color?: string, inkQuantity?: number) {
    if(color) {
      this.color = color;
    }
    if(inkQuantity) {
      this.inkQuantity = inkQuantity;
    }
  }

  printing(str: string): void {
    this.inkQuantity -= (str.length * 0.5);
  }
}
