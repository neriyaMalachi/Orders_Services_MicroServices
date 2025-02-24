const db = require('../orderServer');

// Create Order
exports.createOrder = (req, res) => {
    const { customer_name, item, quantity } = req.body;
    db.run(`INSERT INTO orders (customer_name, item, quantity) VALUES (?, ?, ?)`,
        [customer_name, item, quantity], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, customer_name, item, quantity, status: 'pending' });
        });
};

// Read All Orders
exports.getAllOrders = (req, res) => {
    db.all(`SELECT * FROM orders`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

// Read Single Order
exports.getOrderbyId = (req, res) => {
    db.get(`SELECT * FROM orders WHERE id = ?`, [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        row ? res.json(row) : res.status(404).json({ message: 'Order not found' });
    });
};

// Update Order
exports.updateOrder =(req, res) => {
    const { customer_name, item, quantity, status } = req.body;
    db.run(`UPDATE orders SET customer_name = ?, item = ?, quantity = ?, status = ? WHERE id = ?`,
        [customer_name, item, quantity, status, req.params.id], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            this.changes ? res.json({ message: 'Order updated' }) : res.status(404).json({ message: 'Order not found' });
        });
};

// Delete Order
exports.deleteById = (req, res) => {
    db.run(`DELETE FROM orders WHERE id = ?`, [req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        this.changes ? res.json({ message: 'Order deleted' }) : res.status(404).json({ message: 'Order not found' });
    });
};
