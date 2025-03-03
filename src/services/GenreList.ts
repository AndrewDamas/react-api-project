import axios from "axios";
import Genres, { GenreList } from "../models/Genres";

export default function GenreListService(): Promise<Genres[]> {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY ?? "";
	return axios.get<GenreList>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`).then((response) => {
		return response.data.genres;
	});
}
