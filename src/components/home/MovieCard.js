import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCard(props) {
    const { movie } = props
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt="poster" />
            <h5>{movie.Title}({movie.Year})</h5>
            <Link to={`/movie/${movie.imdbID}`} className="movie-card-botton"> Movie Details </Link>
        </div>
        
    )
}
