import { AxiosError } from 'axios';

export const handleHttpError = (error: AxiosError, context: 'movies' | 'movie-detail') => {
    if (error.response?.status === 404) {

        if (context === 'movies') throw new Error('No se encontraron películas');

        if (context === 'movie-detail') throw new Error('No se encontraron detalles de la película');
    }

    if (error.response?.status === 500) {
        throw new Error('Error en el servidor');
    }

    throw new Error('Error al obtener los datos');
}
