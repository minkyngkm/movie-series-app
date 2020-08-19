import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

function MovieContainer(props) {
    const {movies}  = props
    console.log( movies )
    // 근데 movies 는 array 이니까 mapping 해줘야함! 
    let content = ""
    if (movies === undefined){
        console.log( "Cannot find data")
    }else{
        content = movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>) 
        // console.log(content)
    }  
    return <div class="movie-container"> {content} </div>
}
const mapStateToProps = (state) => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieContainer)