//use client instead of pool,
import express from "express";
import { client } from "./index";
//select* retur hittat eller ej om den (tokens) finns det här om success

// ej skrivit api eftersom det står i index
const accountRouter = express.Router();
//fångar upp en POST-förfrågan till "/login" endpoint, koden hanterar inloggning.
//Användarnamn och lösenord extraheras från req.body.
accountRouter.post("/login", (req, res) => {
  const { userName, passWord } = req.body;
  client.query(
    // SELECT-fråga mot databasen för att kontrollera om användarnamn och lösenord matchas i databasen.
    "SELECT * FROM piguser WHERE username = $1 AND password = $2",
    [userName, passWord],
    (error, result) => {
      if (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Error logging in" });
      } else {
        if (result.rowCount > 0) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ message: "Invalid username or password" });
        }
      }
    }
  );
});

//POST-förfrågan till "/createaccount" endpoint. Hanterar skapandet av ett nytt konto.
accountRouter.post("/createaccount", (req, res) => {
  // Extrahera användaruppgifter från req.body
  const { firstName, secondName, userName, passWord } = req.body;
  client.query(
    //INSERT-fråga utförs mot databasen för att lägga till användaruppgifterna i databasen.
    "INSERT INTO piguser(username, password, firstname, secondname) VALUES ($1, $2, $3, $4)",
    [userName, passWord, firstName, secondName],
    (error) => {
      if (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ message: "Error creating account" });
      } else {
        console.log("Account created successfully");
        res.status(200).json({ message: "Account created successfully" });
      }
    }
  );
});

export default accountRouter;
