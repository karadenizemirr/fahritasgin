import { User } from "src/user/user.model";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "fahritaskin",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],

})