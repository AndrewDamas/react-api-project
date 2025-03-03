export interface Popular {
	results: Results[];
}

export default interface Results {
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	overview: string;
	poster_path: string;
	release_date: string;
	runtime: number;
	title: string;
	vote_average: number;
}
