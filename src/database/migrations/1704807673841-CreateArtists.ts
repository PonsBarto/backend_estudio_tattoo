import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateArtists1704807673841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Artists",
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
                      name: "name",
                      type: "varchar",
                      length: "255",                         
                   },
                   {
                     name: "surname",
                     type: "varchar",
                     length: "255",                         
                  },
                   {
                     name: "portfolio",
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
             ],
             }),
             true
          );
 }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Artists");
    }

}
