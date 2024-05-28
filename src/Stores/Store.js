import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./states/movieState"

export const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    devTools: true
})