import { ReactNode, useState } from "react";
// import { MovieDetails } from "../models/MovieDetails";
import Results from "../models/Popular";
import FavoriteContext from "./FavoriteContext";

interface Props {
  children: ReactNode;

  // favorite: Results[];
  // addMovie: (movie: Results[]) => void;
  // removeMovie: (id: string) => void;
}

const FavoriteContextProvider = ({ children }: Props) => {
  const [favMovie, setFavMovie] = useState<Results[]>([]);

  function addFavoriteMovie(favorite: Results[]): void {
    // copy then modify
    let copiedMovie = [...favMovie];
    copiedMovie.push(favorite);
    // works with .push() empty can provide an empty array 
    setFavMovie(copiedMovie);
  }
  function removeFavoriteMovie(id: number): void {
		const index: number = favMovie.findIndex((results) => results.id === id);
        // copy then modify
        let copiedMovie = [...favMovie];
        copiedMovie.splice(index, 1);
        setFavMovie(copiedMovie);
};

return (
  <FavoriteContext.Provider value={{ favMovie, addFavoriteMovie, removeFavoriteMovie }}>
    {children}
  </FavoriteContext.Provider>
);
};

export default FavoriteContextProvider;

