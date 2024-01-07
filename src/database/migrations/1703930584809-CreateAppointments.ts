import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAppointments1703930584809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appoiments",
                columns: [
                  {
                     name: "id",
                     type: "int",
                     isPrimary: true,
                     isGenerated: true,
                     generationStrategy: "increment",
                  },
                  {
                    name: "user_id",
                    type: "int",
                    isPrimary: true,
                 },
                 {
                    name: "artist_id",
                    type: "int",
                    isPrimary: true,
                 },
                {
                    name: "date",
                    type: "varchar",
                    length: "255",                    
                },
                {
                    name: "hour",
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
               foreignKeys: [
               {
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
               },
               {
                columnNames: ["artist_id"],
                referencedTableName: "artists",
                referencedColumnNames: ["id"],
               },
            ],
            }),
            true
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Appointments");
    }

}
