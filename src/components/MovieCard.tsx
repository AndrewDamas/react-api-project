import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Genres from '../models/Genres';
import Results from '../models/Popular'
import GenreListService from '../services/GenreList';
import "../styles/HomePage.css"

export default function MovieCard(movie: Results) {
    // const watchlistArray: Results[] = [];
    const [genres, setGenres] = useState<Genres[]>();
    const [favorited, setFavorited] = useState(false);
    useEffect(() => {
        GenreListService().then(data => {
          setGenres(data);
        });
    }, []);
  return (
    <div className='movieListing'>
        <a href={`/details/${movie.id}`}>
            <img src= {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" className="poster" />
        </a>
        {/* <p>{movie.overview}</p> */}
        <h3>{movie.title}</h3>
        <div className='movieGenre'>
        {
            movie.genre_ids.map((genre_id, index) => 
            genres !== undefined &&
            <ul key={index}>
                {
                    genres.map((genre, index) => {
                    if (genre.id === genre_id){
                        return (
                            <li key={index}>{genre.name}</li>
                        )
                    }
                    })
                }
            </ul>
            )
        }
        </div>
        {/* {
            favorited === false ? 
            <button onClick={() => {
                watchlistArray.push(movie);
                setFavorited(!favorited);
            }}>ADD TO WATCHLIST</button> :
            <button onClick={() => {
                watchlistArray.push(movie);
                setFavorited(!favorited);
            }}>REMOVE FROM WATCHLIST</button>
        }
        {
            watchlistArray.map((movie, index) => 
                <p key={index}>{movie.title}</p>
            )
        } */}
    </div>
  )
}
