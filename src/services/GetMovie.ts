import axios from "axios";
import Movie from "../models/MovieInterface";

export default function GetMovies() : Promise<Movie> {
    return axios
        .get<Movie>("https://api.themoviedb.org/3/movie/347158?api_key=13c48fdaaa24883f7d467fb0eb37311e")
        .then(response => response.data)
}