import cors from "cors";
import express from "express";

//från handou: "publicering via Heroku"
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
client.connect();

// app.get("/cities", (request, response) => {
//   client.query("SELECT * FROM cities", (error, result) => {
//     console.log("rows: ", result.rows);
//   });
//   response.send("Formuläret är mottaget.");
// });

//från handou: "publicering via Heroku"
app.use(express.static(path.join(path.resolve(), "public")));
const port = process.env.PORT || 8000;

//Test login
//user array?
app.get("/loginn", async (request, response) => {
  const { rows } = await client.query(
    "SELECT * FROM accounts WHERE email = $1 AND password = $2",
    [request.body.email, request.body.password]
  );
  if (rows !== null && rows.length > 0) {
    response.status(200).send("Inloggad");
  } else if (!request.body) {
    response.status(700);
  } else {
    response.status(401).send("haloj");
  }
});

const users: [{ username: string; password: string }] = [
  { username: "flutra", password: "secret" },
];

app.post("/login", async (request, response) => {
  const { rows } = await client.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [request.body.email, request.body.password]
  );

  rows[0].username;
  if (rows !== null && rows.length > 0) {
    response.status(200).send("Inloggad");
  } else {
    response.status(401).send("Unauthorized");
  }
  console.log(request.body.email);
  console.log(request.body.password);
  // console.log(request.query.email);
  if (!request.body.email || !request.body.password) {
    response.status(400).send("Bad Request");
  }

  users.find(
    () =>
      request.body.email === users[0].username &&
      request.body.password === users[0].password
  );

  if (
    request.body.email !== users[0].username ||
    request.body.password !== users[0].password
  ) {
    response.status(401).send("Unauthorized");
  }
  response.send("Formuläret är mottaget.");
});

// Tidigare kod, skillnaden är portnr
app.listen(port, () => {
  console.log("Redo på ", port);
});
