import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSearchSlice";

const appStore =configureStore({
    reducer: {
        user:userReducer,
        newMovies: moviesReducer,
        gptSearch: gptReducer,
    },
})

export default appStore;