"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDesign1703930610301 = void 0;
const typeorm_1 = require("typeorm");
class CreateDesign1703930610301 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Designs",
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
        await queryRunner.dropTable("Designs");
    }
}
exports.CreateDesign1703930610301 = CreateDesign1703930610301;
