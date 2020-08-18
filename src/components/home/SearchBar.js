import React from 'react'
import { searchAction } from '../../actions/searchActions'
import { fetchMovie } from '../../actions/searchActions'
import { connect } from 'react-redux'


function SearchBar(props) {

    const handleChange = (e) => {
        props.searchAction(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchMovie( props.text )
    }
    // preventDefault() 임!! NOT defaultPrevent..!!! 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a movie or TV series..."
                    name="search-bar"
                    onChange={handleChange}
                />
                <button> Search </button>
            </form>
            
        </div>
    )
}
const mapStateToProps = state => ({
   text: state.movies.text
})
// 여기에서 state는 global state. 전체 state. movies 는 combineReducer에서 가져온 키 값. text 는 initial state에서 설정한 것.
export default connect( mapStateToProps, {searchAction,fetchMovie})(SearchBar)

// the action creator should be wrapped with {} cuz obecject should be passed.