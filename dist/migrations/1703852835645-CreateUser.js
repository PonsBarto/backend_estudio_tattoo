"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1703852835645 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1703852835645 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.dropTable("Users");
    }
}
exports.CreateUser1703852835645 = CreateUser1703852835645;
