import { AxiosError } from 'axios';

export const handleHttpError = (error: AxiosError) => {
    if (error.response?.status === 404) {
        throw new Error('No se encontraron películas')
    }
    throw new Error('Error al obtener las películas')
}