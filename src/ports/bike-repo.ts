import { Bike } from "../bike";

export interface BikeRepo {
  find(email: string): Promise<Bike>;
  add(bike: Bike): Promise<string>;
  remove(email: string): Promise<void>;
  list(): Promise<Bike[]>;
  update(bikeId: string, bike: Bike): Promise<void>;
}
