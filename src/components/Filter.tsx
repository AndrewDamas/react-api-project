import { useContext, useState } from "react";
import "../styles/Filter.css";
import FilteredContext from "../context/FilterContext";
import { categories } from "../constants/categories";

const Filter = () => {
	const { toggleShowFilter, filterMovies } = useContext(FilteredContext);

	const [rating, setRating] = useState<number>();
	const [genre, setGenre] = useState<number>();
	const [language, setLanguage] = useState<string>("en");

	return (
		<div className="Filter">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					toggleShowFilter();
					filterMovies({
						genre: genre,
						language: language,
						vote_average_gte: rating,
					});
				}}
			>
				<div>
					<h4>Rating (Greater Than)</h4>
					<label htmlFor="rating">0</label>

					<input
						type="range"
						id="rating"
						min={0}
						max={10}
						onChange={(e) => {
							setRating(Number(e.target.value));
						}}
					></input>

					<label htmlFor="rating">10 </label>
				</div>
				<div>
					<h4>Genre</h4>
					<select
						defaultValue={genre}
						onChange={(e) => {
							setGenre(Number(e.target.value));
						}}
					>
						<option hidden>Select Genre</option>
						{categories.map((category) => (
							<option
								key={category.id}
								value={category.id}
							>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<h4>Language</h4>
					<input
						type="radio"
						id="l1"
						name="language"
						value="en"
						onClick={() => {
							setLanguage("en");
						}}
					></input>
					<label htmlFor="l1"> English </label>
					<input
						type="radio"
						id="l2"
						name="language"
						value="es"
						onClick={() => {
							setLanguage("es");
						}}
					></input>
					<label htmlFor="l2"> Español </label>
					<input
						type="radio"
						id="l3"
						name="language"
						value="ja"
						onClick={() => {
							setLanguage("ja");
						}}
					></input>
					<label htmlFor="l3"> 日本 </label>
					<input
						type="radio"
						id="l4"
						name="language"
						value="fr"
						onClick={() => {
							setLanguage("fr");
						}}
					></input>
					<label htmlFor="l4">Française</label>
				</div>
				<button type="submit">Apply Filters</button>
			</form>
		</div>
	);
};

export default Filter;
