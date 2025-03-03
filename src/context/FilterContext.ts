import { createContext } from "react";
import Results from "../models/Popular";
import { DiscoverFilters } from "../services/Discover";

interface FilterContextModel {
	filteredMovies: { [key: number]: Results[] };
	showFilter: boolean;
	selectedGenre: number | null;
	toggleShowFilter: () => void;
	filterMovies: ({ genre, vote_average_gte, language }: DiscoverFilters) => void;
}

const defaultFilteredMovies: FilterContextModel = {
	filteredMovies: {},
	showFilter: false,
	selectedGenre: null,
	toggleShowFilter: () => {},
	filterMovies: () => {},
};

const FilteredContext = createContext(defaultFilteredMovies);
export default FilteredContext;
