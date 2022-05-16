import { configureStore } from "@reduxjs/toolkit/"
import { authReducer, userReducer } from "../features/"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer
    }
})