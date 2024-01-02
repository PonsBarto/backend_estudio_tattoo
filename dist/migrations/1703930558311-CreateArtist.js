"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArtist1703930558311 = void 0;
const typeorm_1 = require("typeorm");
class CreateArtist1703930558311 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    name: "title",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "director",
                    type: "int",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Artists");
    }
}
exports.CreateArtist1703930558311 = CreateArtist1703930558311;
