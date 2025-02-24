import express from "express";
const router = express.Router();
import {
  createOrder,
  deleteById,
  getAllOrders,
  getOrderbyId,
  updateOrder,
} from "../controllers/orderController.js";

// נתיבי CRUD למשתמשים
router.post("/orders", createOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:id", getOrderbyId);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteById);

export default router;
