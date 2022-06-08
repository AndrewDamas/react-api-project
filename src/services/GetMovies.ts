import axios from "axios";
import Movie from "../models/MovieInterface";
import SearchMovieResults, { SearchMovie } from "../models/Search";

export default function GetMovies(search: string) : Promise<SearchMovieResults[]> {
    return axios
        .get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=13c48fdaaa24883f7d467fb0eb37311e&query=${search}`)
        .then((response) => {return response.data.results})

}