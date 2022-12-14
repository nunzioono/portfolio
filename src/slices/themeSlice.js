import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'darkTheme',
  initialState: {
    darkTheme: false,
  },
  reducers: {
    invert: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkTheme = !state.darkTheme
    },
  },
})

export const { invert } = themeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDarkTheme = (state) => state.theme.darkTheme

export default themeSlice.reducer
