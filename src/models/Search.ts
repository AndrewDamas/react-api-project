export interface SearchMovie {
	results: SearchMovieResults[];
}

export default interface SearchMovieResults {
	genres_ids: number[];
	backdrop_path: string | null;
	id: number;
	title: string;
	overview: string;
	vote_average: number;
	poster_path: string;
	release_date: string;
	runtime: number;
}
