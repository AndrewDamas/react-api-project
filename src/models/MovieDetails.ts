interface ProductionCountry {
	iso_3166_1: string; // "US",
	name: string; //"United States of America"
}

interface ProductionCompany {
	iso_3166_1: string; // "US",
	name: string; //"United States of America"
}

interface SpokenLanguage {
	english_name: string; // "French",
	iso_639_1: string; // "fr",
	name: string; //"Français"
}

interface GenreModel {
	id: number; //28,
	name: string; // "Action"
}

export interface MovieDetails {
	adult: boolean; //false,
	backdrop_path: string; // "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
	belongs_to_collection: null;
	budget: number; // 74000000,
	genres: GenreModel[];
	homepage: string; // "https://www.thelostcity.movie/",
	id: number; //752623,
	imdb_id: string; //"tt13320622",
	original_language: string; // "en",
	original_title: string; // "The Lost City",
	overview: string; // "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
	popularity: number; // 3870.596,
	poster_path: string; // "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string; //"2022-03-24",
	revenue: number; // 164289828,
	runtime: number; // 112,
	spoken_languages: SpokenLanguage[];
	status: string; //"Released",
	tagline: string; // "The adventure is real. The heroes are not.",
	title: string; //"The Lost City",
	video: false;
	vote_average: number; //6.7,
	vote_count: number; // 1051
}
