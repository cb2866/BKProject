import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gamesSliceReducer from "../features/games/gamesSlice";
import singleGameReducer from "../features/games/singleGameSlice";

const store = configureStore({
  reducer: {
    games: gamesSliceReducer,
    singleGame: singleGameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
