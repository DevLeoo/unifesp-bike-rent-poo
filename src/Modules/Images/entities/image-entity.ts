import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("imageUrls")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;
}

export default Images;
