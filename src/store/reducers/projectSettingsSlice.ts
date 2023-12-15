import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProjectSettings {
  lang: string;
  theme: string;
}

const initialState = {
  lang: 'en',
  theme: 'dark',
};

const projectSettingsSlice = createSlice({
  name: 'projectSettings',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<IProjectSettings['lang']>) {
      state.lang = action.payload;
    },
    setTheme(state, action: PayloadAction<IProjectSettings['theme']>) {
      state.theme = action.payload;
    },
  },
});

export const { setLang, setTheme } = projectSettingsSlice.actions;

export default projectSettingsSlice.reducer;
