import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import Results from "../models/Popular";
import FilteredContext from "./FilterContext";
import Discover, { DiscoverFilters } from "../services/Discover";
import { categories } from "../constants/categories";

interface FilteredProps {
	readonly children: ReactNode;
}

export default function FilteredContextProvider({ children }: FilteredProps) {
	const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
	const [filteredMovies, setFilteredMovies] = useState<{ [key: number]: Results[] }>({});
	const [showFilter, setShowFilter] = useState<boolean>(false);

	useEffect(() => {
		categories.forEach(({ id }) => {
			Discover({ genre: id }).then((data) => {
				setFilteredMovies((prev) => ({ ...prev, [id]: data }));
			});
		});
	}, []);

	const toggleShowFilter = useCallback(() => {
		setShowFilter(!showFilter);
	}, [showFilter]);

	const filterMovies = useCallback(({ genre, vote_average_gte, language }: DiscoverFilters) => {
		setSelectedGenre(genre ?? null);
		categories.forEach(({ id }) => {
			Discover({
				genre: genre ?? id,
				vote_average_gte: vote_average_gte,
				language: language,
			}).then((data) => {
				setFilteredMovies((prev) => ({ ...prev, [id]: data }));
			});
		});
	}, []);

	const providerMemoized = useMemo(() => {
		return {
			filteredMovies,
			showFilter,
			selectedGenre,
			toggleShowFilter,
			filterMovies,
		};
	}, [filteredMovies, showFilter, selectedGenre, toggleShowFilter, filterMovies]);

	return <FilteredContext.Provider value={providerMemoized}>{children}</FilteredContext.Provider>;
}
