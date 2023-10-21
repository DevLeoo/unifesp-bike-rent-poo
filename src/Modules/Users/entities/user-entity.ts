import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100, nullable: false })
  name: string;

  @Column("varchar", { length: 100, nullable: false })
  email: string;

  @Column("varchar", { length: 100, nullable: false })
  password: string;
}

export default User;
