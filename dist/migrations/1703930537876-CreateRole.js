"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRole1703930537876 = void 0;
const typeorm_1 = require("typeorm");
class CreateRole1703930537876 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.dropTable("Roles");
    }
}
exports.CreateRole1703930537876 = CreateRole1703930537876;
