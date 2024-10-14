import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;