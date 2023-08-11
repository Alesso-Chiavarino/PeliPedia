import { MoviesService } from "../services/movies.service";
import { useState, useEffect, useCallback } from 'react';
import { useAppSelector } from "./store";
import { useMoviesActions } from "./useMoviesActions";
import { setURLpage, getPageNumber } from "../utils/pagination.utils";
import { useErrorsActions } from './useErrorsActions'
import type { HandleSubmit, HandleTextField, HandleInputSearch } from '../types/Form';
import { type Query } from "../types/Params";

export const useMovies = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState<Query>('');
    const [year, setYear] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { setMovies } = useMoviesActions();

    const movies = useAppSelector((state) => state.movies);

    const moviesService = new MoviesService();

    const pageNumber = getPageNumber();

    const { setError } = useErrorsActions()

    const fetchMovies = useCallback(async (searchQuery: Query) => {

        setIsLoading(true);

        try {

            if (year && searchQuery) {
                setPage(1);
                return await moviesService.getMoviesBySearchAndYear(searchQuery, year, page);
            }

            if (year) {
                setPage(1);
                return await moviesService.getMoviesByYear(year, page);
            }

            if (searchQuery) {
                return await moviesService.getMoviesBySearch(searchQuery, page);
            }

            if (pageNumber) {
                return await moviesService.getAllMovies(Number(pageNumber));
            }

            return await moviesService.getAllMovies(page);

        } catch (err) {
            const error = err as Error;
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [page, year])


    const handleInputSearch = (e: HandleInputSearch) => {
        setQuery(e?.target.value);
    }

    const handleTextField = (e: HandleTextField) => {
        setYear(Number(e.currentTarget.value));
    }

    const handleSubmit = async (e: HandleSubmit) => {
        e.preventDefault();
        setPage(1);
        setURLpage(1);

        const res = await fetchMovies(query);
        res && setMovies(res);
    }


    const nextPage = () => {
        if (page === movies.total_pages) return;
        setPage(page + 1);
        setURLpage(page + 1);
    }

    const prevPage = () => {
        if (page === 1) return;
        setPage(page - 1);
        setURLpage(page - 1);
    }


    useEffect(() => {
        fetchMovies(query).then((res) => {
            res && setMovies(res);
        });
    }, [page]);

    return {
        isLoading,
        movies,
        nextPage,
        prevPage,
        handleInputSearch,
        handleSubmit,
        handleTextField,
    }
}
