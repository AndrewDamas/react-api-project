import { ReactNode, useState, useContext } from "react";
import Results from "../models/Popular";
import FilteredContext from "./FilterContext";

interface FilteredProps {children: ReactNode;}

export default function FilteredContextProvider({children}: FilteredProps){
    const [filteredMovies, setFilteredMovies] = useState<Results[]>([]);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    
    function setShowFilter1(): void{
        setShowFilter(!showFilter)
    }

    function addFilteredMovies(movies: Results):void{
        setFilteredMovies(prev => [...prev, movies]);
    }

    function removeFilteredMovies():void {
        setFilteredMovies([]);
    }

    return (
        <FilteredContext.Provider value={{filteredMovies, showFilter, setShowFilter1, addFilteredMovies, removeFilteredMovies}}>
            {children}
        </FilteredContext.Provider>
    );
};