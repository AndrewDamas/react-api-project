import axios from "axios";
import SearchMovieResults, { SearchMovie } from "../models/Search";

export default function GetMovies(search: string): Promise<SearchMovieResults[]> {
	return axios
		.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie`, {
			params: {
				api_key: process.env.REACT_APP_TMDB_API_KEY,
				query: search,
			},
		})
		.then((response) => {
			return response.data.results;
		});
}
