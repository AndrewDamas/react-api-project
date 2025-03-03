import { useEffect, useState } from "react";
import SearchMovieResults from "../models/Search";
import GetMovies from "../services/GetMovies";
import "../styles/Search.css";

function Search() {
	const [title, setTitle] = useState<string>("");
	const [movie, setMovie] = useState<SearchMovieResults[]>([]);

	useEffect(() => {
		GetMovies(title).then((data) => {
			setMovie(data);
		});
	}, [title]);

	return (
		<div className="Search">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					name=""
					id="search"
					placeholder="Type movie/tv show here"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<button type="submit">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
			{movie.map((title) => (
				<div
					className="movieListing"
					key={title.id}
				>
					<h3>{title.title}</h3>
					<a href={`/details/${title.id}`}>
						<img
							src={`https://image.tmdb.org/t/p/w200/${title.poster_path}`}
							alt=""
							className="poster"
						/>
					</a>
					<p>{title.overview}</p>
				</div>
			))}
		</div>
	);
}

export default Search;
