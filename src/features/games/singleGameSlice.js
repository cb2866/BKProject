import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { singleGame: {}, loading: false, error: null };

export const fetchSingleGame = createAsyncThunk(
  "fetchSingleGame",
  async (gameId) => {
    const { data } = await axios.get(`/api/games/${gameId}`);
    return data;
  }
);

const singleGameSlice = createSlice({
  name: "singleGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleGame.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSingleGame.fulfilled, (state, action) => {
        state.loading = false;
        state.singleGame = action.payload;
      })
      .addCase(fetchSingleGame.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const selectSingleGame = (state) => {
  return state.singleGame.singleGame;
};

export default singleGameSlice.reducer;
