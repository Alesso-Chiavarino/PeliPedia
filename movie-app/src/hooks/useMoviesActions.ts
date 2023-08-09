import { setMoviesAction } from "../features/movies/movieSlice";
import { useAppDispatch } from "./store";
import { type Movies } from "../types/Movie";

export const useMoviesActions = () => {

    const dispatch = useAppDispatch()

    const setMovies = (movies: Movies) => {
        dispatch(setMoviesAction(movies))
    }

    return {
        setMovies
    }

}