import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import Watchlist from "./components/WatchList";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/details/:id"
						element={<InfoPage />}
					/>
					<Route
						path="/watch-list"
						element={<Watchlist />}
					/>
					<Route
						path="/search"
						element={<SearchPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
