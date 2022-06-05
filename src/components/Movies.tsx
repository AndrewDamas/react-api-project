import React, { useEffect, useState } from 'react'
import Genres, {GenreList} from '../models/Genres'
import Movie from '../models/MovieInterface'
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
    const [movie, setMovie] = useState<Movie>()
    const [genres, setGenres] = useState<Genres[]>()
    useEffect(() => {
        GetMovies().then(data => {
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
            <p>{movie?.title}</p>
            <p>{movie?.overview}</p>
            {movie?.genres.map((genre, index) => <p key={index}>{genre.name}</p>)}
            {
                movie !== undefined &&
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="MOVIE POSTER" />
            }
        </div>
    )
}

export default Movies