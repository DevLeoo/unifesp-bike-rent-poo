import { RentRepo } from "../../src/ports/rent-repo";
import { Rent } from "../../src/rent";
import crypto from "crypto";

export class FakeRentRepo implements RentRepo {
  rents: Rent[] = [];

  async findOpen(bikeId: string, userEmail: string): Promise<Rent> {
    return this.rents.find(
      (rent) =>
        rent.bike.id === bikeId && rent.user.email === userEmail && !rent.end
    );
  }

  async add(rent: Rent): Promise<string> {
    const newId = crypto.randomUUID();
    rent.id = newId;
    this.rents.push(rent);
    return newId;
  }

  async update(id: string, rent: Rent): Promise<void> {
    const rentIndex = this.rents.findIndex((rent) => rent.id === id);
    if (rentIndex !== -1) this.rents[rentIndex] = rent;
  }

  async list(): Promise<Rent[]> {
    return this.rents;
  }
}
