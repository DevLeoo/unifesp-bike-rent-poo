import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Images from "../../Images/entities/image-entity";

@Entity("bikes")
export class Bikes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  bodySize: number;

  @Column()
  maxLoad: number;

  @Column()
  rate: number;

  @Column({ length: 255 })
  description: string;

  @Column()
  ratings: number;

  @OneToMany(() => Images, (image) => image.bikeId)
  imageUrls: Images[];

  @Column()
  available: boolean;

  @Column()
  lat: number;

  @Column()
  long: number;
}

export default Bikes;
