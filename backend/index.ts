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

export const client = new Client({
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT as number | undefined,
  user: process.env.PGUSER,
});

client.connect();

client
  .query(
    `CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  recipe VARCHAR(255),
  author VARCHAR(255)
);`
  )
  .then(() => console.log("added"))
  .catch(() => console.log("not added :("));

app.post("/create-recipe", async (req, res) => {
  const { author, recipe } = req.body;

  const data = await client.query(
    "INSERT INTO recipes (recipe, author) VALUES ($1, $2) RETURNING *",
    [recipe, author]
  );

  res.json(data.rows);
});

app.get("/get-recipes", async (req, res) => {
  const data = await client.query("SELECT * FROM recipes");
  res.json(data.rows);
});

app.get("/feedback", async (request, response) => {
  response.send([
    {
      name: "Lisa McFlanagan",
      image: "AVATAR.png",
      description:
        "This food website is the true gem in the gastronomic universe! The dishes here are so mouthwatering, I can practically taste them through my screen. I've become a self-proclaimed foodie ninja, effortlessly navigating through the menu, unleashing my inner epicurean. Warning: side effects may include sudden cravings, uncontrollable foodgasms, and an addiction to refreshing the page for new culinary adventures",
      nationality: "Probably Irish",
    },
    {
      name: "Bubba",
      image: "Bubba.svg",
      description:
        "“Wowza! This food website is like a flavor explosion in my mouth, and my taste buds are doing the happy dance! I use it all the time. It feels great to contribute to a better global environment and for my economy.”",
      nationality: "Probably Irish",
    },
    {
      name: "Seb Murphy",
      image: "AVATAR.png",
      description: "“This site makes me fat and happy.”",
      nationality: "Probably Irish",
    },
  ]);
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

//Test login
//user array?
app.get("/login", async (request, response) => {
  const { rows } = await client.query(
    "SELECT * FROM accounts WHERE email = $1 AND password = $2",
    [request.body.email, request.body.password]
  );
  if (rows !== null && rows.length > 0) {
    response.status(200).send("Inloggad");
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
