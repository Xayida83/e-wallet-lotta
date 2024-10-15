import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    settings:settingsReducer,
  },
});

export default store;