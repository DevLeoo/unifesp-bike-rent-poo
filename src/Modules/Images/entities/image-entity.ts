import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Bikes from "../../Bikes/entities/bike-entity";

@Entity("imageUrls")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Bikes, (bike) => bike.imageUrls)
  bikeId: Bikes;

  @Column()
  url: string;
}

export default Images;
