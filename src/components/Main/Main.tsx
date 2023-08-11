import { MoviesContainer } from '../MoviesContainer/MoviesContainer';
import { Filters } from '../Filters/Filters';

export const Main = () => {

    return (
        <main>
            <Filters />
            <MoviesContainer />
        </main>
    )
}