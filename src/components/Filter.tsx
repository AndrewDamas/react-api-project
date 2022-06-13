import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Results from "../models/Popular";
import Discover from "../services/Discover";
import MovieCard from "./MovieCard";
import '../styles/Filter.css'
import FilteredContext from "../context/FilterContext";

export default function Filter() {

    const {filteredMovies, showFilter, setShowFilter1, addFilteredMovies, removeFilteredMovies} = useContext(FilteredContext);

    const navigate = useNavigate();

    const [rating, setRating] = useState<string>("0");
    const [genre, setGenre] = useState("");
    const [language,setLanguage] = useState<string>("en");

    const [discover, setDiscover] = useState<Results[]>([]);

    useEffect(() => {
        Discover(parseInt(genre), parseInt(rating),"popularity.desc", language).then(data => {
        setDiscover(data);
        })
    }, [genre, language, rating])
    

    return(
    <div className="Filter">
        <form onSubmit={(e) => {
            e.preventDefault();
            setShowFilter1();
            removeFilteredMovies();
            /* discoverRating.map(movie => addFilteredMovies(movie));
            discoverGenre.map(movie => addFilteredMovies(movie));
            discoverRuntime.map(movie => addFilteredMovies(movie)); */
            discover.map((movie) => {
                addFilteredMovies(movie)
            });
            navigate("/filter");
        }}>
            <div>
            <h4>Rating</h4>
            <label htmlFor="rating">0</label>

            <input type="range" id="rating" min={"0"} max={"10"} onChange={(e) => {setRating(e.target.value)}}></input>

            <label htmlFor="rating">10 </label>
            

            </div>
            <div>
            <h4>Genre</h4>
            <select defaultValue={genre} onChange={(e) =>{setGenre(e.target.value)}}>
                <option hidden>Select Genre</option>
                <option value={28}>Action</option>
                <option value={12}>Adventure</option>
                <option value={16}>Animation</option>
                <option value={35}>Comedy</option>
                <option value={18}>Drama</option>
                <option value={10751}>Family</option>
                <option value={27}>Horror</option>
                <option value={10749}>Romance</option>
                <option value={53}>Thriller</option>
            </select>
            
            </div>
            <div>
                <h4>Language</h4>
                <input type="radio" id="l1" name="language" value='en' onClick={()=>{setLanguage("en")}}></input>
                <label htmlFor="l1"> English </label>
                <input type="radio" id="l2" name="language" value='es' onClick={()=>{setLanguage("es")}}></input>
                <label htmlFor="l2"> Español </label>
                <input type="radio" id="l3" name="language" value='ja' onClick={()=>{setLanguage("ja")}}></input>
                <label htmlFor="l3"> 日本 </label>
                <input type="radio" id="l4" name="language" value='fr' onClick={()=>{setLanguage("fr")}}></input>
                <label htmlFor="l4">Française</label>
            
            </div>
            <button type='submit'>Apply Filters</button>
        </form>
    </div>
    )
}