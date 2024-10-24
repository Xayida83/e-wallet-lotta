import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: '1',
      cardholder: 'Charlotta Lindberg',
      cardNumber: '1234567812345678',
      expireMonth: '04',
      expireYear: '25',
      cvc: '123',
      issuer: 'Visa',
      active: true,
    },
    {
      id: '2',
      cardholder: 'Charlotta Lindberg',
      cardNumber: '8765432187654321',
      expireMonth: '10',
      expireYear: '28',
      cvc: '456',
      issuer: 'MasterCard',
      active: false,
    },
  ],
  activeCardId: '1',
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
    deleteInactiveCards: (state) => {
      state.cards = state.cards.filter(card => card.id === state.activeCardId); 
    },
  },
});

export const { addCard, updateCard, activateCard, deleteCard, deleteInactiveCards } = cardSlice.actions;

export default cardSlice.reducer;