import { useContext } from "react";
import SearchContext from "../context/SearchContext";

export default function SearchPage() {
	const { searchedMovies } = useContext(SearchContext);

	return (
		<div>
			{searchedMovies.map((title) => (
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
