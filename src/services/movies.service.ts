import axios, { AxiosError } from 'axios'
import { handleHttpError } from '../utils/http.utils';
import { API_URL, API_KEY, language } from '../consts/movies.consts';
import { MovieDetailResponse, type MoviesResponse } from '../types/Movie';
export class MoviesService {

    async getAllMovies(page: number): Promise<MoviesResponse> {

        try {
            const { data } = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    language,
                    page
                }
            })

            return data

        } catch (err) {
            const error = err as AxiosError
            return handleHttpError(error)
        }

    }

    async getMoviesBySearch(query: string | undefined, page: number): Promise<MoviesResponse> {

        try {
            const { data } = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query,
                    language,
                    page
                }
            })
            return data
        } catch (err) {
            const error = err as AxiosError
            return handleHttpError(error)
        }
    }

    async getMoviesByYear(year: number, page: number): Promise<MoviesResponse> {
        try {
            const { data } = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    language,
                    page,
                    primary_release_year: year
                }
            })
            return data
        } catch (err) {
            const error = err as AxiosError
            return handleHttpError(error)
        }
    }

    async getMoviesBySearchAndYear(query: string, year: number, page: number): Promise<MoviesResponse> {
        try {
            const { data } = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    language,
                    page,
                    query,
                    primary_release_year: year
                }
            })
            return data
        } catch (err) {
            const error = err as AxiosError
            return handleHttpError(error)
        }
    }

    async getMovieDetailsById(id: number): Promise<MovieDetailResponse> {
        try {
            const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    language
                }
            })
            return data
        } catch (err) {
            const error = err as AxiosError
            return handleHttpError(error)
        }
    }

}