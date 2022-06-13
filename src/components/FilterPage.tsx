import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import FilteredContext from "../context/FilterContext";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import '../styles/FilterPage.css';

export default function FilterPage() {
    const {filteredMovies, addFilteredMovies} = useContext(FilteredContext);
    return (<div className="displayFilter category">
        {filteredMovies.map((movie, index) =>
            <MovieCard {...movie}/>
        )}
        </div>
        
    )
}