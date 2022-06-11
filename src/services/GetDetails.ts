import axios from "axios";
import { MovieDetails } from "../models/MovieDetails";

export default function getDetails(id: string): Promise<MovieDetails> {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
    return axios
    .get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: apiKey,
            language: "en-US"
        }
    })
    .then(response => response.data)
}