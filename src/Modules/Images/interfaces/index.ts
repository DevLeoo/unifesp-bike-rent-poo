import Bikes from "../../Bikes/entities/bike-entity";

export interface IImage {
  url: string;
  id?: string;
  bikeId: Bikes;
}
