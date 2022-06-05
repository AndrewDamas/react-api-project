import axios from "axios";
import {GenreList} from "../models/Genres";
import Genres from "../models/Genres";

export default function GenreListService(): Promise<Genres[]>{
    return axios
        .get<GenreList>("https://api.themoviedb.org/3/genre/movie/list?api_key=13c48fdaaa24883f7d467fb0eb37311e")
        .then((response) => {return response.data.genres})
}