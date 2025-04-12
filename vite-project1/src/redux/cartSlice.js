import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/cart';

// Fetch cart from backend
export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.items;
});

// Add to cart on backend
export const addToCart = createAsyncThunk('cart/addToCart', async (product, thunkAPI) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(API_URL, { productId: product._id, quantity: 1 }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.items;
});

// Update cart item quantity
export const updateCartItem = createAsyncThunk('cart/updateCartItem', async ({ itemId, quantity }, thunkAPI) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.put(`${API_URL}/${itemId}`, { quantity }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.items;
});

// Remove cart item
export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (itemId, thunkAPI) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.delete(`${API_URL}/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.items;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      });
  },
});

export default cartSlice.reducer;
