import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Genres from '../models/Genres';
import Results from '../models/Popular'
import GenreListService from '../services/GenreList';
import FavoriteContextModel from '../context/FavoriteContext';
import "../styles/HomePage.css"

export default function MovieCard(movie: Results) {
    // const watchlistArray: Results[] = [];
    const [genres, setGenres] = useState<Genres[]>();

    const {favMovies, addFavoriteMovie, removeFavoriteMovie } = useContext(FavoriteContextModel);
    
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
        <div>
                    
                    <button onClick={() => {
        
                        console.log(movie);
                    
                        addFavoriteMovie(movie);

                        console.log(favMovies);
                        
                        }}><i className="fa-solid fa-heart"></i> </button>
                    
                      <button onClick={() => removeFavoriteMovie(movie.id) }>REMOVE FROM WATCHLIST</button> 
        
        </div>

        {/* <div> 
            <i onClick= {() => 
                {addFavoriteMovie(movie);
                console.log(favMovies);}
            } 
            className="fa-solid fa-heart"></i>
        </div> */}
    </div>
  )
}
