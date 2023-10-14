import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersCards } from './operations';



const initialState = {
  cards: [],
  isLoading: false,
  isUpdating: false,
  error: null,
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  extraReducers: {
    
    [fetchUsersCards.pending](state) {
      state.isLoading = true;
    },
    [fetchUsersCards.fulfilled](state, action) {
      
      state.cards.push(...action.payload)
        // ({ ...state.users, ...action.payload });
      console.log("action.payload",action.payload)
      state.isLoading = false;
    },
    [fetchUsersCards.rejected](state, action) {
      state.error = action.payload;
    },
    

  },
});

export const followReducer = followSlice.reducer;

