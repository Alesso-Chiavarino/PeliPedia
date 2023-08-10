import { ENV } from "../config/env.config";

export const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

export const API_KEY = ENV.TMDB_API_KEY

export const language = '&language=es-ES'

export const QUERY_PAGE = 'page'
export const URL_IMAGE = `https://image.tmdb.org/t/p/original`
export const API_URL = 'https://api.themoviedb.org/3';