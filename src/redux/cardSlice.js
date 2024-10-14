import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  activeCardId: null,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState, 
  reducers: {
    addCard : (state, action) => {
      state.cards.push(action.payload);

      //* Om det här är det första kortet som läggs till, gör det automatiskt aktivt
      if (state.cards.length === 1) {
        state.activeCardId = action.payload.id;
      }
    },
    updateCard: (state, action) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      if (index !== -1){
        state.cards[index] = action.payload;
      }
    },
    activateCard: (state, action) => {
      state.activeCardId = action.payload;
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, updateCard, activateCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;