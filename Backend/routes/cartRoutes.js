const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { protect } = require("../middlewares/authMiddleware");

// All cart routes below are protected
router.get("/", protect, cartController.getCart);        // ✅ Added GET route
router.post("/", protect, cartController.addToCart);
router.put("/:id", protect, cartController.updateCartItem);
router.delete("/:id", protect, cartController.removeCartItem);

module.exports = router;
