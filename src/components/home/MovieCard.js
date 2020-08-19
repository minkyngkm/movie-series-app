import React from 'react'

export default function MovieCard(props) {
     const { movie } = props
    return (
            <div className="movie-card">
                <div>
                <img src={movie.Poster} alt="poster"/>
                <h5>{movie.Title}({movie.Year})</h5>  
                </div>
            </div>
        
    )
}
