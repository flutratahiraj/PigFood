"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//use client instead of pool,
const express_1 = __importDefault(require("express"));
const conection_1 = __importDefault(require("./conection"));
//selecr* retur hittat eller ej om den (tokens) finns det här om success
// ej skrivit api eftersom det står i index
const accountRouter = express_1.default.Router();
//fångar upp en POST-förfrågan till "/login" endpoint, koden hanterar inloggning.
//Användarnamn och lösenord extraheras från req.body.
accountRouter.post("/login", (req, res) => {
    const { userName, passWord } = req.body;
    conection_1.default.query(
    // SELECT-fråga mot databasen för att kontrollera om användarnamn och lösenord matchas i databasen.
    "SELECT * FROM piguser WHERE username = $1 AND password = $2", [userName, passWord], (error, result) => {
        if (error) {
            console.error("Error logging in:", error);
            res.status(500).json({ message: "Error logging in" });
        }
        else {
            if (result.rowCount > 0) {
                // Om inloggningsuppgifterna är korrekta, returnera ett lyckat svar
                res.status(200).json({ message: "Login successful" });
            }
            else {
                // Annars returnera ett felmeddelande
                res.status(401).json({ message: "Invalid username or password" });
            }
        }
    });
});
//POST-förfrågan till "/createaccount" endpoint. Koden hanterar skapandet av ett nytt konto.
accountRouter.post("/createaccount", (req, res) => {
    // Extrahera användaruppgifter från req.body
    const { firstName, lastName, userName, passWord } = req.body;
    conection_1.default.query(
    //INSERT-fråga utförs mot databasen för att lägga till användaruppgifterna i databasen.
    "INSERT INTO piguser(username, password, firstname, lastname) VALUES ($1, $2, $3, $4)", [userName, passWord, firstName, lastName], (error, result) => {
        if (error) {
            console.error("Error creating account:", error);
            res.status(500).json({ message: "Error creating account" });
        }
        else {
            console.log("Account created successfully");
            res.status(200).json({ message: "Account created successfully" });
        }
    });
});
exports.default = accountRouter;
