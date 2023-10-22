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
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
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
            name: "imageUrls",
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
          {
            name: "bikeId",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "imageUrls",
      new TableForeignKey({
        columnNames: ["bikeId"],
        referencedColumnNames: ["id"],
        referencedTableName: "bikes",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const imageUrlsTable = await queryRunner.getTable("imageUrls");
    if (imageUrlsTable) {
      const foreignKey = imageUrlsTable.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("bikeId") !== -1
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey("imageUrls", foreignKey);
      }
    }

    await queryRunner.dropTable("bikes");

    await queryRunner.dropTable("imageUrls");
  }
}
