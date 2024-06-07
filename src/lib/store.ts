import { configureStore } from "@reduxjs/toolkit";
import acceptingMessageSlice from "../features/accepting_message/acceptingMessageSlice";

const store = configureStore({
    reducer: {
        isAcceptingMessage: acceptingMessageSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
