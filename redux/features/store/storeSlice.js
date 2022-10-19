import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Variables";
const initialState = {
  loading: false,
  stores: [],
  store: {},
  error: null,
};

export const fetchStores = createAsyncThunk("store/fetchStores", async () => {
  const response = await axios.get(`${BASE_URL}/api/store/`);
  return response.data;
});
export const fetchStoresByTransaction = createAsyncThunk(
  "store/fetchStores",
  async (transaction) => {
    const response = await axios.get(
      `${BASE_URL}/api/store?transaction=${transaction}`
    );
    return response.data;
  }
);
export const fetchStoreById = createAsyncThunk(
  "store/fetchStoreById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/api/store/${id}`);
    console.log("REDUX");
    return response.data;
  }
);
const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStores.pending]: (state) => {
      state.loading = true;
    },
    [fetchStores.fulfilled]: (state, action) => {
      state.loading = false;
      state.stores = action.payload;
    },
    [fetchStores.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.stores = [];
    },
    [fetchStoresByTransaction.pending]: (state) => {
      state.loading = true;
    },
    [fetchStoresByTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      state.stores = action.payload;
    },
    [fetchStoresByTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.stores = [];
    },
    [fetchStoreById.pending]: (state) => {
      state.loading = true;
    },
    [fetchStoreById.fulfilled]: (state, action) => {
      state.loading = false;
      state.store = action.payload;
    },
    [fetchStoreById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.store = {};
    },
  },
});

export default storeSlice.reducer;
