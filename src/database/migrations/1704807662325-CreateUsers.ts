import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1704807662325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "role_id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                 },
                {
                    name: "surnames",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "phone",
                    type: "int",
                    length: "25",
                    isUnique: true,

                },  
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isUnique: true,

                },
                {
                    name: "password_hash",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "createdAt",
                    type: "int",
                    length: "255",
                    isUnique: true,

                },
                
                ],
                foreignKeys: [
                    {
                        columnNames: ["role_id"],
                        referencedTableName: "roles",
                        referencedColumnNames: ["id"],
                    },
                ],
                }),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
    }

}
