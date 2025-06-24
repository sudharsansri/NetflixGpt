import { createSlice } from "@reduxjs/toolkit";
import { popularMovie } from "./popularMovie";

const userSlice=createSlice({
    name: "movies",
    initialState: {
        nowPlaymovies: null,
        popularMovies: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaymovies = action.payload;
        },
         addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        }
    },
})


export const { addMovies , addPopularMovies } = userSlice.actions;
export default userSlice.reducer;   