import { type Movie } from '../../types/Movie'
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard/MovieCard';
import { Stack, TextField } from '@fluentui/react';
import { NoMoviesResults } from '../NoMoviesResults/NoMoviesResults';
import './MoviesContainer.scss'
import { ActionButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';

export const MoviesContainer = () => {

    const { movies, nextPage, prevPage, handleInputSearch, handleSubmit, handleTextField, error } = useMovies()

    initializeIcons(); //CAMBIAR DE LUGAR

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };
    const hasMovies = movies.results.length > 0

    return (
        <section className='movies-section'>
            <h3>List of Movies {movies.total_results}</h3>
            <h3>Total pages {movies.total_pages}</h3>
            <h3>Page: {movies.page}</h3>

            <div>
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                // tokens={{ childrenGap: 10 }} 
                >
                    <ActionButton
                        iconProps={{ iconName: 'DoubleChevronLeftMed' }}
                        ariaLabel="Anterior"
                        onClick={prevPage}
                        style={{ color: 'white' }}
                    >
                        Anterior
                    </ActionButton>
                    <ActionButton
                        iconProps={{ iconName: 'DoubleChevronLeftMedMirrored' }}
                        ariaLabel="Siguiente"
                        onClick={nextPage}
                        style={{ color: 'white' }}
                    >
                        Siguiente
                    </ActionButton>
                </Stack>
            </div>

            <form onSubmit={handleSubmit}>
                <SearchBox
                    styles={searchBoxStyles}
                    onChange={handleInputSearch}
                    placeholder='Vengadores, Barbie, ...'
                />
                {/* <input onChange={handleInputSearch} placeholder='Vengadores, Barbie, ...' /> */}
                <button>Search</button>
            </form>

            <TextField label="Año de la película " onChange={handleTextField} />

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