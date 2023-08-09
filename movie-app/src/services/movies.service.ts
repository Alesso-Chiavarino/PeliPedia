import axios, { AxiosError } from 'axios'
import { ENV } from '../config/env.config';
import { HttpStatusCode } from '../types/HttpStatus';
import { handleHttpError } from '../utils/http.utils';
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = ENV.TMDB_API_KEY
// const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
// const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
const language = 'es-ES'

export class MoviesService {

    async getAllMovies(page: number) {

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
            handleHttpError(error)
        }

    }

    async getMoviesBySearch(query: string, page: number) {

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
            throw new Error('Error searching movies by query')
        }
    }

    async getMoviesByYear(year: number, page: number) {
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
            throw new Error('Error searching movies by year')
        }
    }

    async getMoviesBySearchAndYear(query: string, year: number, page: number) {
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
            throw new Error('Error searching movies by query and year')
        }
    }

    async getMovieDetailsById(id: number) {
        try {
            const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    language
                }
            })
            return data
        } catch (err) {
            throw new Error('Error searching movie details')
        }
    }

}