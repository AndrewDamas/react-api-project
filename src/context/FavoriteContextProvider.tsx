import { ReactNode, useState } from "react";
import Results from "../models/Popular";
import FavoriteContext from "./FavoriteContext";

interface Props {
  children: ReactNode;

  // favorite: Results[];
  // addMovie: (movie: Results[]) => void;
  // removeMovie: (id: string) => void;
}

const FavoriteContextProvider = ({ children }: Props) => {
  const [favMovies, setFavMovies] = useState<Results[]>([]);

  function addFavoriteMovie(favorite: Results): void {
    // copy then modify
    
    // works with .push() empty can provide an empty array 
    setFavMovies((prev) => {
      let copiedMovie = [...prev]
      copiedMovie.push(favorite)
      
      return copiedMovie
    });
    console.log(favMovies);

  }
  function removeFavoriteMovie(id: number): void {
		const index: number = favMovies.findIndex((results) => results.id === id);
        // copy then modify
        let copiedMovie = [...favMovies];
        copiedMovie.splice(index, 1);
        setFavMovies(copiedMovie);

        console.log(favMovies);
};

return (
  <FavoriteContext.Provider value={{ favMovies, addFavoriteMovie, removeFavoriteMovie }}>
    {children}
  </FavoriteContext.Provider>
);
};

export default FavoriteContextProvider;