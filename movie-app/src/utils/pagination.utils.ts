import { QUERY_PAGE } from "../consts/movies.consts"

export const setURLpage = (page: number) => {
    window.history.pushState({}, '', `?${QUERY_PAGE}=${page}`)
}