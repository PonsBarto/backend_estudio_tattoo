"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointments1703930584809 = void 0;
const typeorm_1 = require("typeorm");
class CreateAppointments1703930584809 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Appointments",
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
        await queryRunner.dropTable("Appointments");
    }
}
exports.CreateAppointments1703930584809 = CreateAppointments1703930584809;
