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

//min lokala anslutning
LocalClient.connect();
//från handou: "publicering via Heroku"
//varför är det "UNDERSCORE_request"
app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

app.get("/feedback", async (request, response) => {

  response.send([

    {
      name: 'Lisa McFlanagan',
      image: 'AVATAR.png',
      description:
        'This food website is the true gem in the gastronomic universe! The dishes here are so mouthwatering, I can practically taste them through my screen. I\'ve become a self-proclaimed foodie ninja, effortlessly navigating through the menu, unleashing my inner epicurean. Warning: side effects may include sudden cravings, uncontrollable foodgasms, and an addiction to refreshing the page for new culinary adventures',
      nationality: 'Probably Irish'
    },
    {
      name: 'Bubba',
      image: 'Bubba.svg',
      description:
        '“Wowza! This food website is like a flavor explosion in my mouth, and my taste buds are doing the happy dance! I use it all the time. It feels great to contribute to a better global environment and for my economy.”',
      nationality: 'Probably Irish',
    },
    {
      name: 'Seb Murphy',
      image: 'AVATAR.png',
      description:
        '“This site makes me fat and happy.”',
      nationality: 'Probably Irish',
    },
  ]
);


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
