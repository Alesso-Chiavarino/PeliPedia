import { MoviesService } from "../services/movies.service";
import { useState, useEffect } from 'react'
import { useAppSelector } from "./store";
import type { HandleSubmit, HandleTextField, HandleInputSearch } from '../types/Form'
import { useMoviesActions } from "./useMoviesActions";
import { QUERY_PAGE } from "../consts/movies.consts";
import { setURLpage } from "../utils/pagination.utils";

export const useMovies = () => {

    const [page, setPage] = useState(1)
    const [query, setQuery] = useState<string | undefined>('')
    const [year, setYear] = useState(0)
    const [error, setError] = useState('')

    const { setMovies } = useMoviesActions()

    const movies = useAppSelector((state) => state.movies)

    const moviesService = new MoviesService()

    const pageNumber = new URLSearchParams(window.location.search).get(QUERY_PAGE)

    const nextPage = () => {
        if (page === movies.total_pages) return
        setPage(page + 1)
        setURLpage(page + 1)
    }

    const prevPage = () => {
        if (page === 1) return
        setPage(page - 1)
        setURLpage(page - 1)
    }

    const handleInputSearch = (e: HandleInputSearch) => {
        setQuery(e?.target.value)
    }

    const handleTextField = (e: HandleTextField) => {
        setYear(Number(e.currentTarget.value))
    }

    const handleSubmit = async (e: HandleSubmit) => {
        e.preventDefault()
        setPage(1)
        setURLpage(1)

        if (year && query) {
            const res = await moviesService.getMoviesBySearchAndYear(query, year, page)
            console.log('aca')
            return setMovies(res)
        }

        if (year) {
            const res = await moviesService.getMoviesByYear(year, page)
            return setMovies(res)
        }

        const res = await moviesService.getMoviesBySearch(query, page)
        return setMovies(res)
    }

    const fetchMovies = async (query: string | undefined) => {

        try {

            if (year && query) {
                const res = await moviesService.getMoviesBySearchAndYear(query, year, page)
                return setMovies(res)
            }

            if (year) {
                const res = await moviesService.getMoviesByYear(year, page)
                return setMovies(res)
            }

            if (query) {
                const res = await moviesService.getMoviesBySearch(query, page)
                return setMovies(res)
            }

            if (pageNumber) {
                const res = await moviesService.getAllMovies(Number(pageNumber))
                return setMovies(res)
            }

            const res = await moviesService.getAllMovies(page)
            return setMovies(res)

        } catch (err) {
            const error = err as Error
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchMovies(query)
    }, [page])

    return {
        movies,
        nextPage,
        prevPage,
        handleInputSearch,
        handleSubmit,
        handleTextField,
        error
    }
}
