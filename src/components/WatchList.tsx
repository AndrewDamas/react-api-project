import { useContext } from "react";
import FavoriteContextModel from "../context/FavoriteContext";
import MovieCard from "./MovieCard";
import "../styles/Watchlist.css";

export default function Watchlist() {
	const { favMovies } = useContext(FavoriteContextModel);

	return (
		<div className="WatchList">
			<h1>Watch List</h1>
			<div className="movieSection">
				{favMovies.map((movie) => (
					<MovieCard
						movie={movie}
						key={movie.id}
					/>
				))}
			</div>
		</div>
	);
}
