import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from '../actions/type'

const initialStates = {
    text: "",
    movies: [],
    loading: false,
    movie: []
}
const searchReducer = (state = initialStates, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
            }
        default:
            return state
    }
}

export default searchReducer