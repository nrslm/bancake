import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState:{
    data: []
  },
  reducers: {
    add: (state, action) => {
      const todo = {
        text: action.payload,
      };

      state.data.push(todo);
      
  },
  update: (state, action)=> {
    console.log(state.data)
    console.log(action.payload)
    const res = state.data
    console.log(action.payload)
  }
}})

export const { add, update } = basketSlice.actions;

export default basketSlice.reducer;
