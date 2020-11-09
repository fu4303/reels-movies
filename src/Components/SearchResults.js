import React from 'react';


const img_api = "https://image.tmdb.org/t/p/w342"

// const SearchResults = (props) => {

    // const searchedMovies = props.searchList.map((movie)=>{
    //     return (<div key={movie.id}>
    //         <h3>{movie.title}</h3>
    //         <img src={img_api + movie.poster_path} alt="poster"/>
    //         <p>{movie.vote_average}</p>
    //         <p>{movie.overview}</p>
    //     </div>)
    // })

//     return (
//         <div>
//             {searchedMovies}
//         </div>  
//     );
// }
 
// export default SearchResults;

const MovieResults = ({title,poster_path,vote_average,overview}) => {
    return (<div>
        <h3>{title}</h3>
        <img src={img_api + poster_path} alt="poster"/>
        <p>{vote_average}</p>
        <p>{overview}</p>
    </div>)
}

export default MovieResults