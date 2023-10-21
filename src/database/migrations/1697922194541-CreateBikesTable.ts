import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateBikesTable1697922194541 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "bikes",
        columns: [
          {
            name: "id",
            type: "uuid",
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
            name: "type",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "bodySize",
            type: "int",
            isNullable: false,
          },
          {
            name: "maxLoad",
            type: "int",
            isNullable: false,
          },
          {
            name: "rate",
            type: "int",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "ratings",
            type: "int",
            isNullable: false,
          },
          {
            name: "imageUrlsId",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "available",
            type: "boolean",
            isNullable: false,
          },
          {
            name: "lat",
            type: "int",
            isNullable: false,
          },
          {
            name: "long",
            type: "int",
            isNullable: false,
          },
        ],
      }),
      true
    );
    await queryRunner.createTable(
      new Table({
        name: "imageUrls",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "url",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "bikes",
      new TableForeignKey({
        columnNames: ["imageUrlsId"],
        referencedColumnNames: ["id"],
        referencedTableName: "imageUrls",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("bikes", "FK_bikes_imageUrls");

    await queryRunner.dropTable("bikes");

    await queryRunner.dropTable("imageUrls");
  }
}
