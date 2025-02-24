const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const sqlite3 = require('sqlite3').verbose();



const app = express();
app.use(express.json())
app.use(bodyParser.json());


export const db = new sqlite3.Database('./orders.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
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
        console.log('Database connected and table ready');
    }
});


app.use("/api",orderRoutes);

app.listen(5000, () => {
    console.log('Order service started on port 3004');
    
});