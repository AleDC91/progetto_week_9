import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { SECRET_KEY } from "../config";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import searchSongsReducer from "../reducers/searchSongsReducer";
import defaultSongsReducer from "../reducers/defaultSongsReducer";
import myLibraryReducer from "../reducers/myLibraryReducer";
import activeSongReducer from "../reducers/activeSongReducer";

const initialState = {
  activeSong: {},
  myLibrary: [],
  searchSongs: {
    query: "",
    songsList: [],
    loading: false,
    errorMsg: "",
  },
  defaultSongs: {
    songsLists: {
      rock: [],
      pop: [],
      hipHop: [],
    },
    loading: false,
    errorMsg: "",
  },
};

const bigReducer = combineReducers({
  myLibrary: myLibraryReducer,
  searchSongs: searchSongsReducer,
  defaultSongs: defaultSongsReducer,
  activeSong: activeSongReducer
});

const persistentConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: SECRET_KEY,
      onError: function (error) {
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistentConfig, bigReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
