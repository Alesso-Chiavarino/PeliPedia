export interface Movies {
    page: number;
    results: [];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    id: number;
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
}