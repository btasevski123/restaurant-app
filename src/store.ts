import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/location/locationSlice';
import catalogReducer from './features/catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;