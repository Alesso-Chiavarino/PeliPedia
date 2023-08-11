import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type Movies } from '../../types/Movie'

export type MoviesState = Movies

const initialState: MoviesState = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMoviesAction: (state, { payload }: PayloadAction<Movies>) => {
            state.page = payload.page
            state.results = payload.results
            state.total_pages = payload.total_pages
            state.total_results = payload.total_results
        },
    },
})

export const { setMoviesAction } = movieSlice.actions

export default movieSlice.reducer