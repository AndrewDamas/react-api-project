import { useContext, useEffect, useState } from "react";
import Results from "../models/Popular";
import getPopular from "../services/GetPopular";
import "../styles/HomePage.css";
import MovieCard from "./MovieCard";
import FilteredContext from "../context/FilterContext";
import { categories } from "../constants/categories";

export default function HomePage() {
	const [popular, setPopular] = useState<Results[]>([]);

	const { filteredMovies, selectedGenre } = useContext(FilteredContext);

	useEffect(() => {
		getPopular().then((data) => setPopular(data));
	}, []);

	const renderCategory = (id: number, name: string) => {
		if (selectedGenre !== null && selectedGenre !== id) return null;

		return (
			<div key={id}>
				<h1>{name}</h1>
				<div className="category">
					{filteredMovies[id]
						?.map((movie) => (
							<MovieCard
								key={movie.id}
								movie={movie}
							/>
						))
						.slice(2)}
				</div>
			</div>
		);
	};

	return (
		<div className="HomePage">
			<h1>Popular</h1>
			<div className="category">
				{popular.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
					/>
				))}
			</div>

			{categories.map(({ id, name }) => renderCategory(id, name))}
		</div>
	);
}
