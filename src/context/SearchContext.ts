import { createContext } from "react"
import Results from "../models/Popular"
import SearchMovieResults from "../models/Search";

interface SearchContextModel{
  searchedMovies: SearchMovieResults[],
  typedMovie: string,
  SearchMovies: (movie: string) => void
}
const searchDefaultValues: SearchContextModel  = {
  searchedMovies: [],
  typedMovie: "",
  SearchMovies: () => {}
}
const SearchContext = createContext(searchDefaultValues);
export default SearchContext;