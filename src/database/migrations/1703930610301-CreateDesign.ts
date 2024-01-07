import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDesign1703930610301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "designs",
               columns: [
                  {
                     name: "id",
                     type: "int",
                     isPrimary: true,
                     isGenerated: true,
                     generationStrategy: "increment",
                  },
                  {
                    name: "artist_id",
                    type: "int",
                    isPrimary: true,
                 },
                  {
                     name: "style",
                     type: "varchar",
                     length: "255",                         
                  },
                  {
                    name: "picture",
                    type: "varchar",
                    length: "255",                        
                 },
                 {
                    name: "created_at",
                    type: "timestamp",
                    default: "corrent_timestamp",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "corrent_timestamp",
                    onUpdate: "corrent_timestamp",
                },

               ],
               foreignKeys: [
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
        await queryRunner.dropTable("Designs");
    }

}
