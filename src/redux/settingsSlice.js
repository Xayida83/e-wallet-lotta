import { createSlice } from '@reduxjs/toolkit';
import { lightTheme } from '../theme/theme'; // Importera ett standardtema

const initialState = {
  theme: lightTheme, // Se till att detta är ett giltigt tema-objekt
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // Ändra temat
    setTheme: (state, action) => {
      state.theme = action.payload; //* Spara det valda temat i Redux
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
