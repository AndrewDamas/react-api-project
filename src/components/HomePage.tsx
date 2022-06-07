import React, { useEffect, useState } from 'react'
import Genres from '../models/Genres'
import Results from '../models/Popular'
import Discover from '../services/Discover';
import GenreListService from '../services/GenreList';
import getPopular from '../services/GetPopular';

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
    <div>
      <h1>Popular</h1>
          {
            popular.map((movie, index) => 
              /* movie.genre_ids.map((genre, index) =>
                genre === 53 && */
                <div>
                  <p>{movie.title}</p>
                  <p>{movie.overview}</p>
                    { // LINES 37 - 52 CONVERT GENRE IDS TO GENRES
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
              /* ) */
            )
          }
        <h1>THRILLER</h1>
          {
            discoverThriller.map((movie, index) => 
              <p>{movie.title}</p>
            )
          }
        <h1>Adventure</h1>
          {
            discoverAdventure.map((movie, index) => 
              <p>{movie.title}</p>
            )
          }
    </div>
  )
}
