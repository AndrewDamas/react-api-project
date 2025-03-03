import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import FilteredContext from "../context/FilterContext";
import "../styles/Header.css";
import Filter from "./Filter";
import Search from "./Search";

function Header() {
	const { showFilter, toggleShowFilter } = useContext(FilteredContext);

	const [showSearch, setShowSearch] = useState(false);

	return (
		<div>
			<header>
				<NavLink
					to="/"
					className="logo"
				>
					<i className="fa-solid fa-trash-can"></i>MOVIE JUNKIE
				</NavLink>
				<ul>
					<li>
						<NavLink to="/watch-list">
							<button className="fa-solid fa-heart"></button>
						</NavLink>
					</li>
					<li>
						<button
							className="fa-solid fa-filter"
							onClick={() => {
								toggleShowFilter();
							}}
						></button>
					</li>
					<li>
						<button
							className="fa-solid fa-magnifying-glass"
							onClick={() => {
								setShowSearch(!showSearch);
							}}
						></button>
					</li>
					<li>
						<NavLink to="/">
							<button className="fa-solid fa-house"></button>
						</NavLink>
					</li>
				</ul>
			</header>
			<div>
				<div className={showSearch === true ? "" : "hidden"}>
					<Search />
				</div>
				<div className={showFilter === true ? "" : "hidden"}>
					<Filter />
				</div>
			</div>
		</div>
	);
}

export default Header;
