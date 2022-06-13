import React, { useContext } from 'react'
import FavoriteContextModel from '../context/FavoriteContext'
import MovieCard from './MovieCard'
import '../styles/Watchlist.css'

export default function Watchlist() {
    const { favMovies, addFavoriteMovie, removeFavoriteMovie } = useContext(FavoriteContextModel)

  return (
    <div className='WatchList'>
        <h1>Watch List</h1>
        <div className='movieSection'>
        {favMovies.map((movie, index) =>  
            <MovieCard {...movie}/> 
          
        )}
      </div>
    </div>
  )
}