import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// 단하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

// 리액트의 index.js에게 store를 제공
export default store;