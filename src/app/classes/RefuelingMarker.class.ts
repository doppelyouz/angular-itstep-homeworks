import { Marker } from "./Marker.class";

export class RefuelingMarker extends Marker{
  refueling(refillMarker: number) {
    this.inkQuantity += refillMarker;
  }
}
