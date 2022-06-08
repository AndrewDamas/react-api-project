import axios from "axios";
import Results, { Popular } from "../models/Popular";

export default function getPopular(): Promise<Results[]>{
    const apiKey = process.env.REACT_APP_TMDB_API_KEY1 || "";
    return axios
        .get<Popular>(`https://api.themoviedb.org/3/movie/popular`,{
            params: {
                api_key: apiKey,
            }
        })
        /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
        .then((response) => {return response.data.results})
}