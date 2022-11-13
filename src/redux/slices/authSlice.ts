import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface AuthState {
  value: number;
}

// Define the initial state using that type
const initialState: AuthState = {
  value: 0,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser: () => {
      return initialState;
    },
    increment: (state: AuthState) => {
      state.value += 1;
    },
    decrement: (state: AuthState) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.value;

export default userSlice.reducer;
