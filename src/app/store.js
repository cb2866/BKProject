import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gamesSliceReducer from "../features/games/gamesSlice";
import singleGameReducer from "../features/games/singleGameSlice";
import playersSliceReducer from "../features/players/allPlayersSlice";
import singlePlayerReducer from "../features/players/singlePlayerSlice";

const store = configureStore({
  reducer: {
    games: gamesSliceReducer,
    singleGame: singleGameReducer,
    players: playersSliceReducer,
    singlePlayer: singlePlayerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
