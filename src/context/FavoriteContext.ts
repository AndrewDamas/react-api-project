import { createContext } from "react" 
import { MovieDetails } from "../models/MovieDetails"
import Results from "../models/Popular"
import Discover from "../services/Discover"

interface FavoriteContextModel{
  // favorite: Results[];
  favMovies: Results[];
  addFavoriteMovie: (results: Results) => void;
  removeFavoriteMovie: (id: number) => void;
}
const defaultValues:FavoriteContextModel  = {
  // favorite: [],
  favMovies: [],
  addFavoriteMovie: () => { },
  removeFavoriteMovie: () => { },
}
const FavoriteContextModel = createContext(defaultValues);
export default FavoriteContextModel