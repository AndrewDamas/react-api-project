import React, { useEffect, useState } from 'react'
import Genres, {GenreList} from '../models/Genres'
import Movie from '../models/MovieInterface'
import SearchMovieResults, { SearchMovie } from '../models/Search'
import GenreListService from '../services/GenreList'
import GetMovies from '../services/GetMovie'

function Movies() {
    const [genres, setGenres] = useState<Genres[]>()
    useEffect(() => {
        GenreListService().then(data => {
            setGenres(data);
        });
    }, []);
    return (
        <div>
            <nav>
                <h1>GENRES</h1>
                <ul>
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Comedy</li>
                    <li>Drama</li>
                    <li>Family</li>
                    <li>Horror</li>
                </ul>
            </nav>
        </div>
    )
}

export default Movies