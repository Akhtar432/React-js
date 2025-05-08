import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

const store = configureStore({
    reducer: {
        auth: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
