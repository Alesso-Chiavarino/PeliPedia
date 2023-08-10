type Genre = {
    id: number;
    name: string;
}
export interface Movies {
    page: number;
    results: [];
    total_pages: number;
    total_results: number;
    genres: Genre[];
}

export interface Movie {
    id: number;
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
}