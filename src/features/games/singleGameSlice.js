import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  singleGame: {},
  singleGameSpecifics: {},
  loading: false,
  error: null,
};

export const fetchSingleGame = createAsyncThunk(
  "fetchSingleGame",
  async (gameId) => {
    const { data } = await axios.get(`/api/games/${gameId}`);
    return data;
  }
);

export const fetchSingleGameSpecifics = createAsyncThunk(
  "fetchSingleGameSpecifics",
  async (gameId) => {
    const { data } = await axios.get(`/api/gamePlayerStats/${gameId}`);

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
      })
      .addCase(fetchSingleGameSpecifics.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSingleGameSpecifics.fulfilled, (state, action) => {
        state.loading = false;
        state.singleGameSpecifics = action.payload;
      })
      .addCase(fetchSingleGameSpecifics.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const selectSingleGame = (state) => {
  return state.singleGame.singleGame;
};
export const selectSingleGameSpecifics = (state) => {
  return state.singleGame.singleGameSpecifics;
};

export default singleGameSlice.reducer;
