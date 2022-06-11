import axios from "axios";
import Movie from "../models/MovieInterface";
import SearchMovieResults, { SearchMovie } from "../models/Search";

export default function GetMovies(search: string) : Promise<SearchMovieResults[]> {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
    return axios
        .get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
        .then((response) => {return response.data.results})
}