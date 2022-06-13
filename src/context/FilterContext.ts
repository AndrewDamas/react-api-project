import React from "react";
import { createContext } from "react";
import Results from "../models/Popular";

interface FilterContextModel {
    filteredMovies: Results[],
    showFilter: boolean,
    setShowFilter1: () => void,
    addFilteredMovies: (movies: Results) => void,
    removeFilteredMovies: () => void
}

const defaultFilteredMovies: FilterContextModel = {
    filteredMovies: [],
    showFilter: false,
    setShowFilter1: () => {},
    addFilteredMovies: () => {},
    removeFilteredMovies: () => {}
}

const FilteredContext = createContext(defaultFilteredMovies);
export default FilteredContext;