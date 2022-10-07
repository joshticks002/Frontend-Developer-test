import { configureStore } from "@reduxjs/toolkit";
import ArtReducer from "./features/art-slice";

export default configureStore({ reducer: { arts: ArtReducer } });