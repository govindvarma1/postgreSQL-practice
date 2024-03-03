import express from "express";
import AuthRoutes from "./routes/AuthRoutes.js";
const { Client } = require('pg'); // Destructure Client from the imported module
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function createClient() {

    const client = new Client({
        user: "govind",
        host: "localhost",
        database: "practice",
        password: "12345678",
        port: 5432,
    });
    
    client
        .connect()
        .then(() => console.log("Connected to PosgreSQL Database"))
        .catch((err) => console.log("Error connecting to database: ", err));
}

createClient();


app.use("/api/auth", AuthRoutes);

app.get("/", (req, res) => {
    res.status(200), json({ message: "You are on the home route" });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
