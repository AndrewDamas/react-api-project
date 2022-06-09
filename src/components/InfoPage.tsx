import React, { useEffect, useState } from 'react'
import Results from '../models/Popular'
import Genres from '../models/Genres';
import GenreListService from '../services/GenreList';
import { useParams } from 'react-router-dom';
import Movie from '../models/MovieInterface';
import getDetails from '../services/GetDetails';
import { MovieDetails } from '../models/MovieDetails';

function InfoPage() {
  const [genres, setGenres] = useState<Genres[]>();
  const id = useParams().id;
  const [movie, setMovie] = useState<MovieDetails>();
  useEffect(() => {
    GenreListService().then(data => {
      setGenres(data);
    });
    getDetails(id!).then(data => setMovie(data));
}, []);
  return (
    <div className='InfoPage'>
      <div className='movieListing'>
        <a href={`/details/${movie?.id}`}>
            <img src= {`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt="poster" className="poster" />
        </a>
        <p>{movie?.overview}</p>
        <h3>{movie?.title}</h3>
        <div className='movieGenre'>
        {
            movie?.genres.map((genre_id, index) => 
            genres !== undefined &&
            <ul key={index}>
                {
                    genres.map((genre, index) => {
                    if (genre.id === genre.id){
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
    </div>)
}

export default InfoPage