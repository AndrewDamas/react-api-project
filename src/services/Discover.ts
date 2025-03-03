import axios from "axios";
import Results, { Popular } from "../models/Popular";

export interface DiscoverFilters {
	genre?: number;
	vote_average_gte?: number;
	language?: string;
}

export default function Discover({ genre, vote_average_gte, language }: DiscoverFilters): Promise<Results[]> {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY ?? "";

	return axios
		.get<Popular>(`https://api.themoviedb.org/3/discover/movie`, {
			params: {
				api_key: apiKey,
				sort_by: "popularity.desc",
				with_genres: genre,
				"vote_average.gte": vote_average_gte,
				language: language,
			},
		})
		.then((response) => {
			return response.data.results;
		});
}
