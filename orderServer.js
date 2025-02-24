import express from "express";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes.js";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json());
app.use(bodyParser.json());

export const db = new sqlite3.Database("./orders.db", (err) => {
  if (err) {
    console.error("Error opening database", err.message);
  } else {
    db.run(`
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT,
                item TEXT,
                quantity INTEGER,
                status TEXT DEFAULT 'pending'
            )
        `);
    console.log("Database connected SQL ");
  }
});

app.use("/api", orderRoutes);

app.listen(5000, () => {
  console.log("Order service started on port 5000");
});
