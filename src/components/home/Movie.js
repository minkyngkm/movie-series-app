import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/searchActions'


function Movie(props) {

    useEffect(() => props.fetchMovie(props.match.params.id)
        , [props])

    const { movie } = props
    console.log( movie)
    return (
        <div className="movie-details">
            <div className="movie-details-image">
                <img src={movie.Poster} alt="poster"></img>
            </div>
            <div className="movie-details-text">
                <h2>{movie.Title} </h2>
                <p>  Type: {movie.Type} / Genre: {movie.Genre} / Country: {movie.Country}</p>
                <p> Released date : {movie.Released}</p>
                <p> Genre: {movie.Genre}</p>
                <p> Plot : {movie.Plot} </p>
                <p> Rating : {movie.imdbRating} </p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    loading: state.movies.loading,
    movie: state.movies.movie

})
export default connect(mapStateToProps, { fetchMovie })(Movie)