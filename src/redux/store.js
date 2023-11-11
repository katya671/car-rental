import { configureStore } from "@reduxjs/toolkit";
import advertReducer from "./advertsSlice";
import favoritesReducer from "./favoritesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    advert: advertReducer,
  },
});

export const persistor = persistStore(store);
