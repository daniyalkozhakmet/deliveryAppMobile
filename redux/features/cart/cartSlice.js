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
export const { add_to_cart } = cartSlice.actions;
export default cartSlice.reducer;
