import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Variables";
const initialState = {
  loading: false,
  cart: [],
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase_qty: (state, action) => {
      const id = action.payload;
      state.cart.map((item) => {
        item.id == id && item.qty++;
      });
    },
    reduce_qty: (state, action) => {
      const id = action.payload;
      const existed = state.cart.find((item) => item.id == id);
      console.log(existed);
      if (existed && existed.qty > 1) {
        existed.qty = existed.qty - 1;
      }
    },
    remove_from_cart: (state, action) => {
      console.log(action.payload);
      const id = action.payload;
      state.cart = state.cart.filter((book) => book.id != id);
    },
    add_to_cart: (state, action) => {
      const { checkboxValue, food } = action.payload;
      if (checkboxValue && state.cart.length == 0) {
        state.cart = [...state.cart, food];
      }
      if (checkboxValue && state.cart.length > 0) {
        state.cart.map((book) => {
          book.id == food.id ? "" : (state.cart = [...state.cart, food]);
        });
      }
      if (!checkboxValue) {
        state.cart = state.cart.filter((book) => book.id != food.id);
      }
    },
    book_in_cart: (state, action) => {
      state.cart.map((book) => (book.id == action.payload ? true : false));
    },
  },
  extraReducers: {},
});
export const { add_to_cart, remove_from_cart, increase_qty, reduce_qty } =
  cartSlice.actions;
export default cartSlice.reducer;
