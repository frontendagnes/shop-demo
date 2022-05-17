import { configureStore } from "@reduxjs/toolkit";
import db from "./utility/firebase";
import userReducer from "../features/user/userSlice";
import basketReducer from "../features/basket/baksetSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: db,
      },
      serializableCheck: false,
    }),
});
