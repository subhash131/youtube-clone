import { combineReducers, configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/videoSlice";
import MenuReducer from "./features/MenuToggleSlice";

const rootReducer = combineReducers({
  // TODO:
  videoReducer,
  MenuReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
