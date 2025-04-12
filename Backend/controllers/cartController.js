// backend/controllers/cartController.js
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Helper function to get populated cart items for a user
const getPopulatedItems = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart) return [];
  return cart.items.map((item) => ({
    _id: item._id,
    productId: item.product._id,
    name: item.product.name,
    price: item.product.price,
    image: item.product.image,
    quantity: item.quantity,
  }));
};

// POST /cart - add product to cart
exports.addToCart = async (req, res, next) => {
  const { productId, quantity } = req.body;
  try {
    // Validate that product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      // Create a cart if none exists for the user
      cart = new Cart({ user: req.user.id, items: [] });
    }

    // Check if product is already in the cart
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      // Update quantity if exists
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    const items = await getPopulatedItems(req.user.id);
    res.json({ items });
  } catch (error) {
    next(error);
  }
};

// PUT /cart/:id - update quantity for a product in the cart
exports.updateCartItem = async (req, res, next) => {
  const { quantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart)
      return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(
      (item) => item._id.toString() === req.params.id
    );
    if (!item)
      return res.status(404).json({ message: "Cart item not found" });

    item.quantity = quantity;
    await cart.save();
    const items = await getPopulatedItems(req.user.id);
    res.json({ items });
  } catch (error) {
    next(error);
  }
};

// DELETE /cart/:id - remove a product from the cart
exports.removeCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart)
      return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item._id.toString() !== req.params.id
    );
    await cart.save();
    const items = await getPopulatedItems(req.user.id);
    res.json({ items });
  } catch (error) {
    next(error);
  }
};

// Optionally, you could add a GET route (if not already present) to fetch the cart:
// GET /cart - get cart items for the current user
exports.getCart = async (req, res, next) => {
  try {
    const items = await getPopulatedItems(req.user.id);
    res.json({ items });
  } catch (error) {
    next(error);
  }
};
