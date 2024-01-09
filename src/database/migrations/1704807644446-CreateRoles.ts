import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRoles1704807644446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Roles",
                columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "role_name",
                    type: "enum",
                    default: "user",
                    enum: ["user", "admin", "super_admin"],
                },
                {
                    name: "privilege",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "created_At",
                    type: "timestamp",
                    default: "corrent_timestamp",
                }, 
                {
                    name: "updated_At",
                    type: "timestamp",
                    default: "corrent_timestamp",
                    onUpdate: "corrent_timestamp",
                },
                    ],
                }),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Roles");
    }

}