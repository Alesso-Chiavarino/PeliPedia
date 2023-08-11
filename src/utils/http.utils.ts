import { AxiosError } from 'axios';

export const handleHttpError = (error: AxiosError) => {
    if (error.response?.status === 404) {
        throw new Error('No hay películas disponibles')
    }

    if (error.response?.status === 500) {
        throw new Error('Error en el servidor')
    }

    throw new Error('Error al obtener las películas')
}