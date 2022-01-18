import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenu1642535112045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "menus",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "realatedId",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "fk_menus_submenus",
            columnNames: ["realatedId"],
            referencedTableName: "menus",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("menus");
  }
}
