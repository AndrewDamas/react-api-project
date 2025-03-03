import { ReactNode, useState, useMemo, useCallback } from "react";
import SearchMovieResults from "../models/Search";
import GetMovies from "../services/GetMovies";
import SearchContext from "./SearchContext";

interface SearchProps {
	readonly children: ReactNode;
}

export default function SearchContextProvider({ children }: SearchProps) {
	const [searchedMovies, setSearchedMovies] = useState<SearchMovieResults[]>([]);
	const [typedMovie] = useState<string>("");

	const SearchMovies = useCallback((movie: string) => {
		GetMovies(movie).then((data) => {
			setSearchedMovies(data);
		});
	}, []);

	const providerMemoized = useMemo(() => {
		return { searchedMovies, typedMovie, SearchMovies };
	}, [searchedMovies, typedMovie, SearchMovies]);

	return <SearchContext.Provider value={providerMemoized}>{children}</SearchContext.Provider>;
}
