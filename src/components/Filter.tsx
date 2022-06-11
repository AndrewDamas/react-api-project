import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Results from "../models/Popular";
import Discover from "../services/Discover";
import MovieCard from "./MovieCard";
import '../styles/Filter.css'

export default function Filter() {

    const navigate = useNavigate();

    const [rating, setRating] = useState<string>("");
    const [genre, setGenre] = useState("");
    const [runtime,setRuntime] = useState<string>("");

    const [discoverGenre, setDiscoverGenre] = useState<Results[]>([]);
    const [discoverRating, setDiscoverRating] = useState<Results[]>([]);
    const [discoverRuntime, setDiscoverRuntime] = useState<Results[]>([]);

    const [discover, setDiscover] = useState<Results[]>([]);

    useEffect(() => {
        Discover(parseInt(genre)).then((data) => {
            setDiscoverGenre(data);
          });
        Discover(undefined, undefined, undefined, runtime).then((data) => {
            setDiscoverRuntime(data);
          });
        Discover(undefined, parseInt(rating)).then((data) => {
            setDiscoverRating(data);
          });

        Discover(parseInt(genre), parseInt(rating),'',runtime).then(data => {
        setDiscover(data);
        })
    })

    return(
    <div className="Filter">
        <form onSubmit={() => navigate("/filter")}>
            <div>
            <h4>Rating</h4>
            <label htmlFor="rating">0</label>

            <input type="range" id="rating" min={"0"} max={"10"} onChange={(e) => {setRating(e.target.value)}}></input>

            <label htmlFor="rating">10 </label>
            {rating}

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
            {genre}
            </div>
            <div>
                <h4>Runtime</h4>
                <input type="radio" id="time1" name="time" value='30' onClick={()=>{setRuntime('30')}}></input>
                <label htmlFor="time1"> 30 mins or less </label>
                <input type="radio" id="time2" name="time" value='60' onClick={()=>{setRuntime('60')}}></input>
                <label htmlFor="time2"> 1 hr or less</label>
                <input type="radio" id="time3" name="time" value='120' onClick={()=>{setRuntime('120')}}></input>
                <label htmlFor="time3"> 2 hrs or less </label>
                <input type="radio" id="time4" name="time" value='180' onClick={()=>{setRuntime('180')}}></input>
                <label htmlFor="time4">3 hrs or less </label>
                {runtime} 
            </div>
            <button type='submit'>Apply Filters</button>
        </form>
            <div className="displayFilter category">
            {
            discoverRating.map((movie, index) => 
            <MovieCard {...movie}/>)
            }
            </div>
            <div className="displayFilter category">
            {
            discoverGenre.map((movie, index) => 
            <MovieCard {...movie}/>)
            }
            </div>
            {/* <div className="displayFilter category">
            {
            discoverRuntime.map((movie, index) => 
            <MovieCard {...movie}/>)
            }
            </div> */}
            <div className="displayFilter category">
            {
            discover.map((movie, index) => 
            <MovieCard {...movie}/>)
            }
            </div>
    </div>
    )
}

// navigate to filterPage only when apply filter is clicked - will show rating results over home page .-. 
// need to check parameters enetered for discover.... the runtimes dont always filter properly
// one div does not have overflow hidden -.-' 
//  search also displays over home page.... navigate to search page? (run into same problem as filter function?)