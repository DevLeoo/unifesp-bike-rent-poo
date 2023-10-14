import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity("bikes")
export class Bikes extends BaseEntity {
  @PrimaryColumn({ type: "uuid" })
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
  imageUrls: number; // relacionamento one to many

  @Column()
  avaialble: boolean;

  @Column()
  lat: number;

  @Column()
  long: number;
}
