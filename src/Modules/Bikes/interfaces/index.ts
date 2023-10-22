import { IImage } from "../../Images/interfaces";

export interface IBike {
  name: string;
  type: string;
  bodySize: number;
  maxLoad: number;
  rate: number;
  description: string;
  ratings: number;
  imageUrls: IImage[];
  available: boolean;
  lat: number;
  long: number;
  id: string;
}
