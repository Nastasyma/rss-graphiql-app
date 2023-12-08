import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITab {
  content: string;
}

interface ITabs {
  tabs: ITab[];
  activeTab: number;
}

const initialState: ITabs = {
  tabs: [{ content: '' }],
  activeTab: 0,
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<string>) => {
      state.tabs.push({ content: action.payload });
    },
    deleteTab: (state, action: PayloadAction<number>) => {
      state.tabs.splice(action.payload, 1);
      if (state.activeTab >= state.tabs.length) {
        state.activeTab = state.tabs.length - 1;
      }
    },
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
    updateTabContent: (state, action) => {
      state.tabs[state.activeTab] = action.payload;
    },
  },
});

export const { addTab, deleteTab, setActiveTab, updateTabContent } =
  tabsSlice.actions;

export default tabsSlice.reducer;
