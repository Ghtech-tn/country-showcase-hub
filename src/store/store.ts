import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import eventsSlice from './slices/eventsSlice';
import mediaSlice from './slices/mediaSlice';
import partnersSlice from './slices/partnersSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    events: eventsSlice,
    media: mediaSlice,
    partners: partnersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;