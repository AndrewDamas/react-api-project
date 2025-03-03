import { useContext, useEffect, useState } from "react";
import Genres from "../models/Genres";
import Results from "../models/Popular";
import GenreListService from "../services/GenreList";
import "../styles/HomePage.css";
import FavoriteContextModel from "../context/FavoriteContext";

interface MovieCardProps {
	movie: Results;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	const { addFavoriteMovie, removeFavoriteMovie, favMovies } = useContext(FavoriteContextModel);

	const [genres, setGenres] = useState<Genres[]>();
	useEffect(() => {
		GenreListService().then((data) => {
			setGenres(data);
		});
	}, []);
	const movieIsFoundInContext = favMovies.find((favMovie) => favMovie.id === movie.id);

	return (
		<div className="movieListing">
			<a href={`/details/${movie.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					alt="poster"
					className="poster"
				/>
			</a>
			<h3>{movie.title}</h3>
			<div className="movieGenre">
				{movie.genre_ids.map(
					(genre_id) =>
						genres !== undefined && (
							<ul key={genre_id}>
								{genres.map((genre) => {
									if (genre.id === genre_id) {
										return <li key={genre.id}>{genre.name}</li>;
									} else {
										return <></>;
									}
								})}
							</ul>
						)
				)}
			</div>
			{
				<div>
					{!movieIsFoundInContext ? (
						<button
							className="heart"
							onClick={() => {
								addFavoriteMovie(movie);
							}}
						>
							<i className="fa-solid fa-heart"></i>
						</button>
					) : (
						<button onClick={() => removeFavoriteMovie(movie.id)}>REMOVE FROM WATCHLIST</button>
					)}
				</div>
			}
		</div>
	);
};

export default MovieCard;
