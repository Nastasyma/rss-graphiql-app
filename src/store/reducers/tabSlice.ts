import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITab {
  requestContent: string;
  variablesContent: string;
  headersContent: string;
}

interface ITabs {
  tabs: ITab[];
  activeTab: number;
}

interface EditorState {
  variablesContent: string;
  headersContent: string;
}

const initialState: ITabs & EditorState = {
  tabs: [{ requestContent: '', variablesContent: '', headersContent: '' }],
  activeTab: 0,
  variablesContent: '',
  headersContent: '',
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<ITab>) => {
      state.tabs.push(action.payload);
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
      state.tabs[state.activeTab] = {
        ...state.tabs[state.activeTab],
        ...action.payload,
      };
    },
    setVariablesContent: (state, action: PayloadAction<string>) => {
      state.variablesContent = action.payload;
    },
    setHeadersContent: (state, action: PayloadAction<string>) => {
      state.headersContent = action.payload;
    },
  },
});

export const {
  addTab,
  deleteTab,
  setActiveTab,
  updateTabContent,
  setVariablesContent,
  setHeadersContent,
} = tabsSlice.actions;

export default tabsSlice.reducer;
