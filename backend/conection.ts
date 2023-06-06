//gör så jag kommer åt .env filen
import * as dotenv from "dotenv";
import { Client } from "pg";
dotenv.config();

const LocalClient = new Client({
  database: process.env.PGDATABASE_LOCAL,
  host: process.env.PGHOST_LOCAL,
  password: process.env.PGPASSWORD_LOCAL,
  port: Number(process.env.PGPORT_LOCAL),
  user: process.env.PGUSER_LOCAL,
});

export default LocalClient;
