import React, { useEffect, useState } from 'react';
import Genres from '../models/Genres';
import Results from '../models/Popular';
import GenreListService from '../services/GenreList';
import getPopular from '../services/GetPopular';


export default function Popular() {
    const[popular, setPopular] = useState<Results[]>([])
    const [genres, setGenres] = useState<Genres[]>()
    useEffect(() => {
        getPopular().then(data => {
            setPopular(data);
        });
    }, []);
    useEffect(() => {
        GenreListService().then(data => {
            setGenres(data);
        });
    }, []);
    return (
        <div className="Popular">
            <h1>POPULAR MOVIES</h1>
                {   
                    popular.map((movie, index) => 
                        <div key={index}>
                            <p>{movie.title}</p>
                            <img src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                            <p>{movie.overview}</p>
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
                    )
                }
        </div>
  )
}
