import "reflect-metadata"
import { DataSource } from "typeorm"
import { Weapon } from "./entity/Weapon"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "weapon-store",
    synchronize: true,
    logging: true,
    entities: [Weapon],
    migrations: [],
    subscribers: [],
})
