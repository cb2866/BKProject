import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { games: [], loading: false, error: null };

export const fetchAllGames = createAsyncThunk("games/allGames", async () => {
  const { data } = await axios.get("/api/games/");
  return data;
});

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchAllGames.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const selectGames = (state) => {
  return state.games.games;
};

export default gamesSlice.reducer;
