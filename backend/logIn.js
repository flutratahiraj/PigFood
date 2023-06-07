"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter = express_1.default.Router();
loginRouter.post("/api/login", (req, res) => {
    // Extrahera användarnamn och lösenord från req.body
    const { username, password } = req.body;
    //  kontroll om användarnamn och lösenord matchar en befintlig post i databasen
    // SELECT-fråga
    // Om inloggningsuppgifterna är korrekta, returnera ett lyckat svar
    // Annars returnera ett felmeddelande
});
exports.default = loginRouter;
