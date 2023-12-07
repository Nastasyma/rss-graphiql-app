import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IEditor {
  isDocOpen?: boolean;
  querySectionSize?: number;
}

const initialState: IEditor = {
  isDocOpen: false,
  querySectionSize: 150,
};

const userSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setDocIsOpen(state, action: PayloadAction<IEditor>) {
      state.isDocOpen = action.payload.isDocOpen;
    },
    setQuerySectionSize(state, action: PayloadAction<IEditor>) {
      state.querySectionSize = action.payload.querySectionSize;
    },
  },
});

export const { setDocIsOpen, setQuerySectionSize } = userSlice.actions;

export default userSlice.reducer;