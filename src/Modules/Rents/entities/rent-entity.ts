import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("rents")
export class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  bike: string;

  @Column()
  user: string;

  @Column()
  start: Date;

  @Column({ nullable: true })
  end: Date;
}

export default Rent;
