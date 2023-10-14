import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity("images")
export class Images extends BaseEntity {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column()
  url: string;
}
