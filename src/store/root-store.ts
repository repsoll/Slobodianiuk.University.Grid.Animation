import { configureStore } from '@reduxjs/toolkit'
import { gridHoverSliceReducer } from './grid-hover-slice';

export const store = configureStore({
  reducer: {
    gridHover: gridHoverSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch