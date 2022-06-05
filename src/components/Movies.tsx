import React, { useEffect, useState } from 'react'
import Genres, {GenreList} from '../models/Genres'
import Movie from '../models/MovieInterface'
import SearchMovieResults, { SearchMovie } from '../models/Search'
import GenreListService from '../services/GenreList'
import GetMovies from '../services/GetMovie'

const movies : Movie[] = [
    {
        genres : [
            {name : "Comedy"}
        ],
        backdrop_path : null,
        title : "Bikini Avengers",
        overview : "When the Jade Empress steals the world's largest diamonds, super heroes Bikini Avenger and Thong Girl must stop her before she uses the gems to build a dangerous sci-fi weapon.",
        vote_average : 5.5,
        poster_path : "/ehTYWuPKwl8sXPX0I6LnvJUDaVl.jpg",
        release_date : "2015-02-24",
        runtime : 81
    },
]

function Movies() {
    const [search, setSearch] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [movie, setMovie] = useState<SearchMovieResults[]>()
    const [genres, setGenres] = useState<Genres[]>()
    useEffect(() => {
        GetMovies(title).then(data => {
            setMovie(data);
        });
    }, []);
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
            <form onSubmit={(e) => {
                e.preventDefault();
                setTitle(search);
                console.log(title);
                }}>
                <label htmlFor="search">SEARCH:</label>
                <input type="text" name="" id="search" placeholder="Type movie/tv show here" onChange={(e) => {setTitle(e.target.value)}}/>
                <button type="submit">SEARCH</button>
            </form>
            {movie?.map((title, index) =>  
                <p key={index}>{title.title}</p>
            )}
        </div>
    )
}

export default Movies