import { createSlice } from "@reduxjs/toolkit";
import { lang } from "./language";

const userSlice=createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoggedIn: false,
        languages: lang.en.code,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        setLanguage: (state, action) => {
            state.languages = action.payload || lang.en.code; 
        },
        
    },
})

export const { setUser, clearUser, setLanguage } = userSlice.actions;
export default userSlice.reducer;