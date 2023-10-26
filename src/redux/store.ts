import { combineReducers, configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./features/videoSlice";
import MenuReducer from "./features/MenuToggleSlice";
import MoreButtonReducer from "./features/MoreButtonToggleSlice";
import UploadVideoReducer from "./features/UploadVideoSlice";

const rootReducer = combineReducers({
  // TODO:
  VideoReducer,
  MenuReducer,
  MoreButtonReducer,
  UploadVideoReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
