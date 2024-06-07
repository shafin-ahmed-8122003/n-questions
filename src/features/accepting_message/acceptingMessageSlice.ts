import { createSlice } from "@reduxjs/toolkit";

const acceptingMessageSlice = createSlice({
    name: "isAcceptingMessage",
    initialState: false,
    reducers: {
        toggle: (state) => !state,
    },
});

export const { toggle } = acceptingMessageSlice.actions;
export default acceptingMessageSlice;
