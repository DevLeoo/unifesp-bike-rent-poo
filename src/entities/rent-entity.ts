import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity("rents")
export class Rent extends BaseEntity {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column()
  bike: string; // relacionamento 1 to 1

  @Column()
  user: string; // relacionamento 1 to 1

  @Column()
  start: Date;

  @Column()
  end: Date;
}
