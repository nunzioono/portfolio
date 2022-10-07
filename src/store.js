import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice.js';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
})