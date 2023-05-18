import cors from "cors";
import express from "express";

import dotenv from "dotenv";
import { Client } from "pg";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const client = new Client({
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT as number | undefined,
  user: process.env.PGUSER,
});

client.connect();

app.get("/", (request, response) => {
  client.query("SELECT * FROM cities", (error, result) => {
    console.log("rows: ", result.rows);
  });
  response.send("Formuläret är mottaget.");
});

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
