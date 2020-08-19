import React from 'react'
import SearchBar from './SearchBar'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux'
import MovieContainer from './MovieContainer'


function Landing(props) {
    const { loading }  = props
    return (
    <div>
        <SearchBar/>
        {loading ? <Spinner/> : <MovieContainer/>}
    </div>
    )
}

const mapToStateToProps = ( state ) => {
    return {
        loading: state.movies.loading
    }
}

export default connect (mapToStateToProps)(Landing)