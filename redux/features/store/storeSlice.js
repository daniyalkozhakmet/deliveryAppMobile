import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  loading: false,
  stores: [],
  store: {},
  error: null,
};

export const fetchStoresByCity = createAsyncThunk(
  "store/fetchStores",
  async (cred) => {
    const { city, transaction } = cred;
    const response = await axios.get(`${BASE_URL}/api/store?city=${city}`);
    return response.data;
  }
);
export const fetchStoresByTransaction = createAsyncThunk(
  "store/fetchStores",
  async (cred) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const value = await AsyncStorage.getItem("refresh");
    console.log("refresh", value);
    const { city, transaction } = cred;

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
    return response.data;
  }
);
const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStoresByCity.pending]: (state) => {
      state.loading = true;
    },
    [fetchStoresByCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.stores = action.payload;
    },
    [fetchStoresByCity.rejected]: (state, action) => {
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
