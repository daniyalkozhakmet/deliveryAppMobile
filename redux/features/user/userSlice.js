import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  loading: false,
  user: [],
  token: null,
  error: null,
};
export const login = createAsyncThunk("user/login", async (credentials) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(`${BASE_URL}/api/token`, credentials);
    console.log(data.refresh)
    await AsyncStorage.setItem("token", JSON.stringify(data.refresh));
  } catch (error) {}
});
const userSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;

