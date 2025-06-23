import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name: "movies",
    initialState: {
        nowPlaymovies: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaymovies = action.payload;
        }
    },
})


export const { addMovies } = userSlice.actions;
export default userSlice.reducer;   