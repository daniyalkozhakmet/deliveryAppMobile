// import { configureStore } from "@reduxjs/toolkit";
// import {storeReducer} from "./reducers/storeReducer";
// import { combineReducers, createStore } from 'redux'
// import storeReducer1 from './reducers/storeSlice'
// const store = configureStore({
//     reducer:storeReducer1
//   })
// // const store = createStore(reducer)
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/store/storeSlice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});
