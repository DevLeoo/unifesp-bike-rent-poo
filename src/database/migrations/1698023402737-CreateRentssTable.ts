import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRentsTable1698023402737 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rents",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "bike",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "user",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "start",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "end",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("rents");
  }
}
