type Genre = {
    id: number;
    name: string;
}
export interface Movies {
    page: number;
    results: [];
    total_pages: number;
    total_results: number;
    // genres: Genre[];
}

export interface Movie {
    id: number;
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
}

export type MoviesResponse = {
    page: number;
    results: [];
    total_pages: number;
    total_results: number;
}

export type MovieDetailResponse = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: [];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: [];
    production_countries?: [];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages?: [];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}