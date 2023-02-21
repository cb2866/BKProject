import { configureStore } from "@reduxjs/toolkit";
import gamesSliceReducer from "../features/games/gamesSlice";
import singleGameSliceReducer from "../features/games/singleGameSlice";
import playersSliceReducer from "../features/players/allPlayersSlice";
import singlePlayerReducer from "../features/players/singlePlayerSlice";

const store = configureStore({
  reducer: {
    games: gamesSliceReducer,
    singleGame: singleGameSliceReducer,
    players: playersSliceReducer,
    singlePlayer: singlePlayerReducer,
  },
});

export default store;
