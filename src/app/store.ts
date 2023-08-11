import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import errorReducer from "../features/errors/errorSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        errors: errorReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch