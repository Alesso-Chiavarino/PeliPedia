import { type Movie } from '../../types/Movie'
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard/MovieCard';
import { NoMoviesResults } from '../NoMoviesResults/NoMoviesResults';
import './MoviesContainer.scss'

export const MoviesContainer = () => {

    const { movies, error, isLoading } = useMovies()

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
                    <h1>{isLoading ? 'Cargando...' : <NoMoviesResults error={error} />}</h1>
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