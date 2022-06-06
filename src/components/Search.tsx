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
      <p key={index}>{title.title}</p>
    )}
    </div>
  )
}

export default Search;