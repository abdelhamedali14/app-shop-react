import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

//reducers
const CounterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementsCounter: (state, action) => {
      state.count += action.payload;
    },

    decrementsCounter: (state, action) => {
      if (state.count === 0) {
        state.count = state.count;
      } else {
        state.count -= action.payload;
      }
    },
  },
});

// action

export const { incrementsCounter, decrementsCounter } = CounterSlice.actions;

export default CounterSlice.reducer;
