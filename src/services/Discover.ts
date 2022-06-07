import axios from "axios";
import Results, { Popular } from "../models/Popular";

export default function Discover(genre?: number, vote_average_gte?: number, sort_by: string = "popularity.desc"): Promise<Results[]>{
    const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
    return axios
    .get<Popular>(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
            api_key: apiKey,
            sort_by: sort_by,
            with_genres: genre,
            vote_average_gte: vote_average_gte
        }
    })
    .then((response) => {return response.data.results})
}