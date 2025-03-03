import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDetails from "../services/GetDetails";
import { MovieDetails } from "../models/MovieDetails";
import "../styles/InfoPage.css";

function InfoPage() {
	const id = useParams().id;
	const [movie, setMovie] = useState<MovieDetails>();
	useEffect(() => {
		getDetails(id ?? "").then((data) => setMovie(data));
	}, [id]);
	return (
		<div className="InfoPage">
			<div className="movieListing">
				<h3>{movie?.title}</h3>
				<img
					src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
					alt="poster"
					className="poster"
				/>
				<h4>{movie?.tagline}</h4>
				<div className="extraInfo">
					<p>
						{movie?.vote_average} <i className="fa-solid fa-star"></i>
					</p>
					<p>{movie?.runtime} min</p>
				</div>
				<p>{movie?.overview}</p>
				{/* {
            favorited === false ? 
            <button onClick={() => {
                watchlistArray.push(movie);
                setFavorited(!favorited);
            }}>ADD TO WATCHLIST</button> :
            <button onClick={() => {
                watchlistArray.push(movie);
                setFavorited(!favorited);
            }}>REMOVE FROM WATCHLIST</button>
        }
        {
            watchlistArray.map((movie, index) => 
                <p key={index}>{movie.title}</p>
            )
        } */}
			</div>
		</div>
	);
}

export default InfoPage;
