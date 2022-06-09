import React, { useEffect, useState } from 'react'
import Genres from '../models/Genres'
import Results from '../models/Popular'
import Discover from '../services/Discover';
import GenreListService from '../services/GenreList';
import getPopular from '../services/GetPopular';
import '../styles/HomePage.css'
import MovieCard from './MovieCard';

export default function HomePage() {
  const [popular, setPopular] = useState<Results[]>([]);
  const [discoverThriller, setDiscoverThriller] = useState<Results[]>([]);
  const [discoverAdventure, setDiscoverAdventure] = useState<Results[]>([]);
  const [genres, setGenres] = useState<Genres[]>();
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
  useEffect(() => {
    Discover(53).then(data => {
      setDiscoverThriller(data);
    })
    Discover(12).then(data => {
      setDiscoverAdventure(data);
    })
  }, [])
  return (
    <div className='HomePage'>
      <h1>Popular</h1>
      <div className="category">
          {
            popular.map((movie, index) => 
            <MovieCard {...movie}/>
            )
          }
        </div>
        <h1>Thrillers</h1>
        <div className="category">
          {
            discoverThriller.map((movie, index) => 
            <MovieCard {...movie}/>
            )
          }
        </div>
        <h1>Adventures</h1>
        <div className="category">
          {
            discoverAdventure.map((movie, index) =>
            <div className='movieListing'> 
              <img src= {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" className="poster"/>
              <h3>{movie.title}</h3>
            </div>
            )
          }
        </div>
    </div>
  )
}
