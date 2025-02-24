const express = require('express');
const router = express.Router();
const ordercontroller = require('../controllers/orderController');

// נתיבי CRUD למשתמשים
router.post('/orders', ordercontroller.createOrder);
router.get('/orders', ordercontroller.getAllOrders);
router.get('/orders/:id', ordercontroller.getOrderbyId);
router.put('/orders/:id', ordercontroller.updateOrder);
router.delete('/orders/:id', ordercontroller.deleteById);

module.exports = router;