export default interface Movie {
    genres : [
        {name : string}
    ],
    backdrop_path : string | null,
    title : string,
    overview : string,
    vote_average : number,
    poster_path : string,
    release_date : string,
    runtime : number
}