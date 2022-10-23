import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/store/storeSlice";
import bookReducer from "./features/book/bookSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
    book: bookReducer,
    cart: cartReducer,
  },
});
