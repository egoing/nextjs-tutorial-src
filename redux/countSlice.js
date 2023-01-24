import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value:0
}
export const slice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
    }
  },
})
export const { up, down } = slice.actions
export default slice.reducer