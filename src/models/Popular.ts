export interface Popular {
    results: Results[],
}

export default interface Results {
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: 6.8,
}