import "reflect-metadata";
import { DataSource } from "typeorm";

//----------------------------------------------------

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "backendtattoo",
    entities: [],
    migrations: [],
    synchronize: false,
    logging: false,  
})