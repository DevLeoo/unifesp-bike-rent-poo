import { Rent } from "../rent";

export interface RentRepo {
  findOpen(bikeId: string, userEmail: string): Promise<Rent>;
  add(rent: Rent): Promise<string>;
  update(id: string, rent: Rent): Promise<void>;
  list(): Promise<Rent[]>;
}
