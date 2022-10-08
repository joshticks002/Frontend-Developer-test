import { configureStore } from "@reduxjs/toolkit";
import ArtReducer from "./Features/art-slice";

export default configureStore({
    reducer: {
        art: ArtReducer,
    },
});