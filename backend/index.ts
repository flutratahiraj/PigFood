import cors from "cors";
import express from "express";

//från handout: "publicering via Heroku"
import path from "path";

import dotenv from "dotenv";
import { Client } from "pg";
import LocalClient from "./conection";
import accountRouter from "./accountRoter";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", accountRouter);
dotenv.config();

const client = new Client({
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT as number | undefined,
  user: process.env.PGUSER,
});

//min lokala anslutning
LocalClient.connect();
//från handou: "publicering via Heroku"
//varför är det "UNDERSCORE_request"
app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

// // Tidigare kod
// //göra images mappen tillgänglig via http://localhost/images
app.use("/images", express.static("images"));

// // Tidigare kod,
// //men borde nog ingå även via publicering...
// client.connect();

// app.get("/cities", (request, response) => {
//   client.query("SELECT * FROM cities", (error, result) => {
//     console.log("rows: ", result.rows);
//   });
//   response.send("Formuläret är mottaget.");
// });

//från handou: "publicering via Heroku"
app.use(express.static(path.join(path.resolve(), "public")));
const port = process.env.PORT || 8000;

// Tidigare kod, skillnaden är portnr
app.listen(port, () => {
  console.log("Redo på ", port);
});
