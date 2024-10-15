import { createSlice } from '@reduxjs/toolkit';

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
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
