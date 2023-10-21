export interface IBike {
  name: string;
  type: string;
  bodySize: number;
  maxLoad: number;
  rate: number;
  description: string;
  ratings: number;
  imageUrls: string;
  available: boolean;
  lat: number;
  long: number;
  id?: string;
}
