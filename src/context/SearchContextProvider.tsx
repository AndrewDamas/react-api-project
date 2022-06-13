import { ReactNode, useState, useContext, useEffect } from "react";
import Results from "../models/Popular";
import SearchMovieResults from "../models/Search";
import GetMovies from "../services/GetMovies";
import SearchContext from "./SearchContext";

interface SearchProps {children: ReactNode;}

export default function SearchContextProvider({children}: SearchProps){
    

    const [searchedMovies, setSearchedMovies] = useState<SearchMovieResults[]>([]);
    const [typedMovie, setTypedMovie] = useState<string>("");
    
    function SearchMovies(movie: string): void{
        useEffect(() => {
            GetMovies(movie).then(data => {
              setSearchedMovies(data);
            });
          }, [movie]);
    }

    return (
        <SearchContext.Provider value={{searchedMovies, typedMovie, SearchMovies}}>
            {children}
        </SearchContext.Provider>
    );
};