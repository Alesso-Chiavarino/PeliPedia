import { type Movie } from '../../types/Movie'
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard/MovieCard';
import { NoMoviesResults } from '../NoMoviesResults/NoMoviesResults';
import { Loader } from '../Loader/Loader';
import { useAppSelector } from '../../hooks/store';
import './MoviesContainer.scss'

export const MoviesContainer = () => {

    const { movies, isLoading } = useMovies()

    const error = useAppSelector(state => state.errors)

    const hasMovies = movies.results.length > 0

    return (
        <>
            <hr />
            <section className='movies-section'>
                <div className='movies-section__details'>
                    <div className='details__results'>
                        <span>Resultados: {movies.total_results}</span>
                        <span>Páginas totales: {movies.total_pages}</span>
                    </div>
                    <span>Página: {movies.page}</span>
                </div>

                {(isLoading || (!hasMovies && !isLoading)) && (
                    <span>{isLoading ? <Loader /> : <NoMoviesResults error={error.message} />}</span>
                )}

                <ul className='movies-container'>
                    {movies.results.map(({ id, title, poster_path, release_date }: Movie) => {
                        return (
                            <MovieCard key={id} title={title} date={release_date} image={poster_path} id={id} />
                        )
                    })}
                </ul>
            </section>
        </>
    )
}