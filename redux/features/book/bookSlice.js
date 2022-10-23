import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Variables";
const initialState = {
  loading: false,
  books: [],
  book: {},
  error: null,
};
export const fetchBooks = createAsyncThunk("books/fetchBooks", async (cred) => {
  const { transaction } = cred;
  const response = await axios.get(
    `${BASE_URL}/api/book?transaction=${transaction}`
  );
  return response.data;
});
export const fetchBooksByName = createAsyncThunk(
  "books/fetchBooksByName",
  async (cred) => {
    const {name } = cred;
    const response = await axios.get(`${BASE_URL}/api/book?book=${name}`);
    return response.data;
  }
);
const bookSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
      state.books = []
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.books = []
    },
    [fetchBooksByName.pending]: (state) => {
      state.loading = true;
      state.books = []
    },
    [fetchBooksByName.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetchBooksByName.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.books = []
    },
  },
});
export default bookSlice.reducer;
