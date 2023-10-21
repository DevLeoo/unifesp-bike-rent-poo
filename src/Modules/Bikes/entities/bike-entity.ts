import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  imageUrls: string;

  @Column()
  available: boolean;

  @Column()
  lat: number;

  @Column()
  long: number;
}

export default Bikes;
