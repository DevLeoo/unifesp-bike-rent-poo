import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity("rents")
export class Rent extends BaseEntity {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column()
  bike: string;

  @Column()
  user: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}
