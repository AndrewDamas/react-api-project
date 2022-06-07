import axios from "axios";
import Movie from "../models/MovieInterface";

export default function GetDetails(id: number): Promise<Movie> {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
    return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(response => response.data)
}