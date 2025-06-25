import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name: "gpt",
    initialState: {
       showGptSearch: false,
    },
    reducers: {
        toggleSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    },
})


export const { toggleSearch  } = gptSlice.actions;
export default gptSlice.reducer;   