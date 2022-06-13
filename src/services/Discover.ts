import axios from "axios";
import Results, { Popular } from "../models/Popular";

export default function Discover(genre?: number, vote_average_gte?: number, sort_by: string = "popularity.desc" , language?: string): Promise<Results[]>{
    const apiKey = process.env.REACT_APP_TMDB_API_KEY1 || "";
    
    return axios
    .get<Popular>(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
            api_key: apiKey,
            sort_by: sort_by,
            'with_genres': genre,
            'vote_average.gte': vote_average_gte,
            'language': language
        }
    })
    .then((response) => {return response.data.results})
}