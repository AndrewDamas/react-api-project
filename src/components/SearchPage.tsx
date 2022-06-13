import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import Search from "./Search";

export default function SearchPage() {
    const {searchedMovies, typedMovie, SearchMovies} = useContext(SearchContext);

    return(<div>
            {searchedMovies.map((title, index) =>
                <div className='movieListing'>
                  <h3 key={index}>{title.title}</h3>
                  <a href={`/details/${title.id}`}>
                    <img src= {`https://image.tmdb.org/t/p/w200/${title.poster_path}`} alt="" className='poster'/>
                  </a>
                  <p key={index}>{title.overview}</p>
                </div>
              )}
    </div>)
}