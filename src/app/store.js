import { configureStore } from "@reduxjs/toolkit/"
import { authReducer, postReducer, userReducer } from "../features/"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        post: postReducer,
    }
})