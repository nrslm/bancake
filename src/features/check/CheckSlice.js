import { createSlice } from '@reduxjs/toolkit';

export const checkSlice = createSlice({
  name: 'check',
  initialState:{
    data: []
  },
  reducers: {
    check: (state, action) => {
      console.log(action.payload)
      state.data = []
      const todo = {
        text: action.payload,
      };

      state.data.push(todo);
  },
}})

export const { check } = checkSlice.actions;

export default checkSlice.reducer;
