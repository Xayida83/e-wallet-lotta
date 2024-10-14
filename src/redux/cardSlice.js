import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: []
};

const cardSlice = createSlice({
  name: 'card',
  initialState, 
  reducers: {
    addCard : (state, action) => {
      state.cards.push(action.payload);
    }
  }
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;