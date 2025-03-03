import { ReactNode, useCallback, useMemo, useState } from "react";
import Results from "../models/Popular";
import FavoriteContext from "./FavoriteContext";

interface Props {
	children: ReactNode;
}

const FavoriteContextProvider = ({ children }: Props) => {
	const [favMovies, setFavMovies] = useState<Results[]>([]);

	const addFavoriteMovie = useCallback(
		(favorite: Results) => {
			setFavMovies((prev) => [...prev, favorite]);
		},
		[favMovies]
	);

	const removeFavoriteMovie = useCallback((id: number) => {
		setFavMovies((prev) => prev.filter((movie) => movie.id !== id));
	}, []);

	const providerMemoized = useMemo(() => {
		return { favMovies, addFavoriteMovie, removeFavoriteMovie };
	}, [favMovies, addFavoriteMovie, removeFavoriteMovie]);

	return <FavoriteContext.Provider value={providerMemoized}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
