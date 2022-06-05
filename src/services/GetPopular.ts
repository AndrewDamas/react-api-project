import axios from "axios";
import Results, { Popular } from "../models/Popular";

export default function getPopular(): Promise<Results[]>{
    return axios
        .get<Popular>("https://api.themoviedb.org/3/movie/popular?api_key=13c48fdaaa24883f7d467fb0eb37311e")
        .then((response) => {return response.data.results})
}