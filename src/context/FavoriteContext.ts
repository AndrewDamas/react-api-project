import { createContext } from "react";
import Results from "../models/Popular";

interface FavoriteContextModelTemp {
	favMovies: Results[];
	addFavoriteMovie: (results: Results) => void;
	removeFavoriteMovie: (id: number) => void;
}
const defaultValues: FavoriteContextModelTemp = {
	favMovies: [],
	addFavoriteMovie: () => {},
	removeFavoriteMovie: () => {},
};

const FavoriteContextModel = createContext(defaultValues);
export default FavoriteContextModel;
