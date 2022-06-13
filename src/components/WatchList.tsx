import React, { useContext } from 'react'
import FavoriteContextModel from '../context/FavoriteContext'
import MovieCard from './MovieCard'

export default function Watchlist() {
    const { favMovies, addFavoriteMovie, removeFavoriteMovie } = useContext(FavoriteContextModel)

  return (
    <div className='WatchList'>
        <h1>Watch List</h1>
        {favMovies.map((movie, index) =>  
            <MovieCard {...movie}/> 
          
        )}

    </div>
  )
}