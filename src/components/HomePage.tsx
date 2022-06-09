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
  const [genres, setGenres] = useState<Genres[]>();
  const [discoverAction, setDiscoverAction] = useState<Results[]>([]);
  const [discoverAdventure, setDiscoverAdventure] = useState<Results[]>([]);
  const [discoverAnimation, setDiscoverAnimation] = useState<Results[]>([]);
  const [discoverComedy, setDiscoverComedy] = useState<Results[]>([]);
  const [discoverDrama, setDiscoverDrama] = useState<Results[]>([]);
  const [discoverFamily, setDiscoverFamily] = useState<Results[]>([]);
  const [discoverHorror, setDiscoverHorror] = useState<Results[]>([]);
  const [discoverRomance, setDiscoverRomance] = useState<Results[]>([]);
  const [discoverThriller, setDiscoverThriller] = useState<Results[]>([]);

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
    Discover(28).then((data) => {
      setDiscoverAction(data);
    });
    Discover(12).then((data) => {
      setDiscoverAdventure(data);
    });
    Discover(16).then((data) => {
      setDiscoverAnimation(data);
    });
    Discover(35).then((data) => {
      setDiscoverComedy(data);
    });
    Discover(18).then((data) => {
      setDiscoverDrama(data);
    });
    Discover(10751).then((data) => {
      setDiscoverFamily(data);
    });
    Discover(27).then((data) => {
      setDiscoverHorror(data);
    });
    Discover(10749).then((data) => {
      setDiscoverRomance(data);
    });
    Discover(53).then((data) => {
      setDiscoverThriller(data);
    });
  }, []);

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
        <h1>Action</h1>
        <div className="category">
          {
            discoverAction.map((movie, index) => 
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
