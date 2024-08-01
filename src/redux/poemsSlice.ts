import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    poems: [],
};

export const poemsSlice = createSlice({
    name: "poems",
    initialState,
    reducers: {
        setPoems: (state, action) => {
            state.poems = action.payload;
        },
    },
});


export const { setPoems } = poemsSlice.actions;

export default poemsSlice.reducer;