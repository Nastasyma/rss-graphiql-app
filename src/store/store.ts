import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import editorReducer from './reducers/editorSlice';
import tabsReducer from './reducers/tabSlice';
import projectReducer from './reducers/projectSettingsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import responseReducer from './reducers/responseSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    editor: editorReducer,
    tabs: tabsReducer,
    project: projectReducer,
    response: responseReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
