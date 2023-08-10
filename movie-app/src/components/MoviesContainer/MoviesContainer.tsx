import { type Movie } from '../../types/Movie'
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard/MovieCard';
import { NoMoviesResults } from '../NoMoviesResults/NoMoviesResults';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import './MoviesContainer.scss'

export const MoviesContainer = () => {

    const { movies, error } = useMovies()

    initializeIcons(); //CAMBIAR DE LUGAR

    const hasMovies = movies.results.length > 0

    return (
        <section className='movies-section'>
            <h3>Results: {movies.total_results}</h3>
            <h3>Total pages: {movies.total_pages}</h3>
            <h3>Page: {movies.page}</h3>

            {!hasMovies && <NoMoviesResults error={error} />}

            <ul className='movies-container'>
                {movies.results.map(({ id, title, poster_path, release_date }: Movie) => {
                    return (
                        <MovieCard key={id} title={title} date={release_date} image={poster_path} id={id} />
                    )
                })}
            </ul>
        </section>
    )
}