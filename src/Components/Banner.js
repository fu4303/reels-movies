import React, {useState, useEffect} from 'react';
import {requests, instance} from '../Api/axios';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await instance.get(requests.upcomingMovies)

                // refinedMovies removes all the movie objects with broken image files,
                // and selects a random movie to display
                const refinedMovies = response.data.results.filter((movie)=>{
                    return movie?.backdrop_path !== null || "" || undefined
                })

            setMovie(refinedMovies[Math.floor(Math.random() * refinedMovies.length)])
            return response
        }
        fetchData()
    }, [])

    const truncate = (string, num) => {
        return string?.length > num ? string.substr(0, num -1) + "..." : string;
    }

    return (
        <header 
            className="banner"
            style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.original_name || movie?.name}</h1>
                    <button className="banner__button">Play Trailer</button>
                    <button className="banner__button">Details</button>
                    <h1 className="banner__overview">{truncate(movie.overview, 150)}</h1>
                </div>
            <div className="banner--fadeBottom "/>

        </header>
    )
}

export default Banner