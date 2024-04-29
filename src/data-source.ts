import { DataSource } from "typeorm";
import { Inventory } from "./entities/Inventory";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "root",
	password: "12345678",
	database: "sci_inventory",
	synchronize: true,
	logging: true,
	entities: [Inventory],
	subscribers: [],
	migrations: [],
})