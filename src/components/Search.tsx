import React, { useEffect, useState } from 'react'
import SearchMovieResults from '../models/Search';
import GetMovies from '../services/GetMovie';
import '../styles/Search.css'

function Search() {
  const [title, setTitle] = useState<string>("");
  const [movie, setMovie] = useState<SearchMovieResults[]>([])
  useEffect(() => {
    GetMovies(title).then(data => {
      setMovie(data);
    });
  }, [title]);
  return (
    <div className='Search'>
      <form onSubmit={(e) => {
        e.preventDefault();
        }}>
        {/* <label htmlFor="search">SEARCH:</label> */}
        <input type="text" name="" id="search" placeholder="Type movie/tv show here" onChange={(e) => {setTitle(e.target.value)}}/>
        {/* <button type="submit">SEARCH</button> */}
    </form>
    {movie.map((title, index) =>
      <div className='movieListing'>
        <h3 key={index}>{title.title}</h3>
        <img src= {`https://image.tmdb.org/t/p/w200/${title.poster_path}`} alt="" className='poster'/>
        <p key={index}>{title.overview}</p>
      </div>
    )}
    </div>
  )
}

export default Search;