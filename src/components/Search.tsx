import React, { useEffect, useState } from 'react'
import SearchMovieResults from '../models/Search';
import GetMovies from '../services/GetMovie';

function Search() {
  const [title, setTitle] = useState<string>("");
  const [movie, setMovie] = useState<SearchMovieResults[]>([])
  useEffect(() => {
    GetMovies(title).then(data => {
      setMovie(data);
    });
  }, [title]);
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(title);
        }}>
        <label htmlFor="search">SEARCH:</label>
        <input type="text" name="" id="search" placeholder="Type movie/tv show here" onChange={(e) => {setTitle(e.target.value)}}/>
        <button type="submit">SEARCH</button>
    </form>
    {movie.map((title, index) =>
      <div>
        <p key={index}>{title.title}</p>
        <img src= {`https://image.tmdb.org/t/p/w200/${title.poster_path}`} alt="" />
        <p key={index}>{title.overview}</p>
      </div>
    )}
    </div>
  )
}

export default Search;