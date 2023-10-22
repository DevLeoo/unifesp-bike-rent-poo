import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1697916588346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}

// CREATE TABLE "bikes" (
//   "id" uuid NOT NULL,
//   "name" character varying NOT NULL,
//   "type" character varying NOT NULL,
//   "bodySize" integer NOT NULL,
//   "maxLoad" integer NOT NULL,
//   "rate" integer NOT NULL,
//   "description" character varying(255) NOT NULL,
//   "ratings" integer NOT NULL,
//   "available" boolean NOT NULL,
//   "lat" integer NOT NULL,
//   "long" integer NOT NULL,
//   CONSTRAINT "PK_6fbb85d3ec127912c5e3de44b07" PRIMARY KEY ("id")
// );

// CREATE TABLE "imageUrls" (
//   "id" uuid NOT NULL,
//   "url" character varying NOT NULL,
//   "bikeId" uuid NOT NULL,
//   CONSTRAINT "PK_6c062b3a6b2fffbcd2b6188a10d" PRIMARY KEY ("id")
// );

// ALTER TABLE "imageUrls" ADD CONSTRAINT "FK_b598d0c5de58d29c26d8f9923e1" FOREIGN KEY ("bikeId") REFERENCES "bikes"("id") ON DELETE CASCADE;
