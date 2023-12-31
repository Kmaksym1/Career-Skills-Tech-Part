import { createSlice } from '@reduxjs/toolkit';
import { addToFollow, fetchUsersCards } from './operations';



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
      
      state.cards.push(...action.payload);
      
      state.isLoading = false;
    },
    [fetchUsersCards.rejected](state, action) {
      state.error = action.payload;
    },
    [addToFollow.pending](state) {
      state.isLoading = true;
    },
    [addToFollow.fulfilled](state, action) {      
      state.cards=state.cards.map(card => {
        if (card.id === action.payload.id) {
          return { ...action.payload };
        }        
        return card;
      });    
      state.isLoading = false;
    },
    [addToFollow.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const followReducer = followSlice.reducer;

