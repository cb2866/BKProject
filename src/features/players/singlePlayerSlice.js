import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  singlePlayerStats: {},
  singePlayerBasic: {},
  loading: false,
  error: null,
};

export const fetchSinglePlayerStats = createAsyncThunk(
  "singlePlayerStats/fetchSinglePlayerStats",
  async (playerId) => {
    const { data } = await axios.get(`/api/playerStats/${playerId}`);
    return data;
  }
);

export const fetchSinglePlayerBasicInfo = createAsyncThunk(
  "singlePlayerBasic/fetchSinglePlayerBasicInfo",
  async (playerId) => {
    const { data } = await axios.get(`/api/players/${playerId}`);
    return data;
  }
);

export const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePlayerStats.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSinglePlayerStats.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePlayerStats = action.payload;
      })
      .addCase(fetchSinglePlayerStats.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchSinglePlayerBasicInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSinglePlayerBasicInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.singePlayerBasic = action.payload;
      })
      .addCase(fetchSinglePlayerBasicInfo.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const selectSinglePlayerBasicInfo = (state) => {
  return state.singlePlayer.singePlayerBasic;
};

export const selectSinglePlayerStats = (state) => {
  return state.singlePlayer.singlePlayerStats;
};

export default singlePlayerSlice.reducer;
