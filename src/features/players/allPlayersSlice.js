import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  playersStats: [],
  playersBasic: [],
  loading: false,
  error: null,
};

export const fetchAllPlayerBasicInfo = createAsyncThunk(
  "playersBasic/fetchAllPlayerBasicInfo",
  async () => {
    const { data } = await axios.get("api/players");
    return data;
  }
);

export const fetchAllPlayerStats = createAsyncThunk(
  "playersStats/fetchAllPlayerStats",
  async () => {
    const { data } = await axios.get("api/playerStats");
    return data;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPlayerBasicInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllPlayerBasicInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.playersBasic = action.payload;
      })
      .addCase(fetchAllPlayerBasicInfo.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchAllPlayerStats.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllPlayerStats.fulfilled, (state, action) => {
        state.loading = false;
        state.playersStats = action.payload;
      })
      .addCase(fetchAllPlayerStats.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const selectPlayerBasicInfo = (state) => {
  return state.players.playersBasic;
};

export const selectPlayerStats = (state) => {
  return state.players.playersStats;
};

export default playersSlice.reducer;
