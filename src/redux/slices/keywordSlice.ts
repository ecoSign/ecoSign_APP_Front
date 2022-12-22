import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// import type { RootState } from '../store';

// Define a type for the slice state
export interface KeywordListState {
  keywordList: string[];
}

// Define the initial state using that type
const initialState: KeywordListState = {
  keywordList: [],
};

const keywordSlice = createSlice({
  name: 'keywordList',
  initialState,
  reducers: {
    resetKeyword: () => initialState,
    addKeyword: (state: KeywordListState, action: PayloadAction<string>) => {
      const keyword: string = action.payload;
      if (state.keywordList.includes(keyword)) {
        state.keywordList = state.keywordList.filter(
          (data: string) => data !== action.payload,
        );
        state.keywordList.unshift(action.payload);
      } else {
        state.keywordList.push(action.payload);
      }
    },
    removeKeyword: (state: KeywordListState, action: PayloadAction<string>) => {
      state.keywordList = state.keywordList.filter(
        (data: string) => data !== action.payload,
      );
    },
  },
});

export const { resetKeyword, addKeyword, removeKeyword } = keywordSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.keywordList;

export default keywordSlice.reducer;
