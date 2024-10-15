import { createSlice } from '@reduxjs/toolkit';
import applyTheme from '../utils/themeUtils';

const initialState = {
  theme: 'dark', //* Standardtema
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // Ändra temat
    setTheme: (state, action) => {
      state.theme = action.payload; //* Spara det valda temat i Redux
      applyTheme(action.payload); //* Anropa applyTheme-funktionen när temat ändras
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
