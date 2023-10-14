import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652abc844791d884f1fd4e18.mockapi.io';

// export async function fetchUsersCards(page) {

//     const { data } = await axios.get(`/users?limit=3&page=${page}`);
//   return data;
// }


export const fetchUsersCards = createAsyncThunk(
  'follow/fetchUsersCards',
  async (page, thunkAPI) => {
    try {
        const resp = await axios.get(`/users?limit=3&page=${page}`);

      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);