import { SEARCH_MOVIE, FETCH_MOVIE } from '../actions/type'

const initialStates = {
    text:"",
    movies:[],
    loading: false,
    movie:[]
}
const searchReducer = ( state = initialStates , action) => {
    switch(action.type){
        case SEARCH_MOVIE : 
            return {
                ...state,
                text: action.payload
            }
        case FETCH_MOVIE: 
            return {
                ...state,
                movies: action.payload
            }
        default: 
            return state
    }
}

export default searchReducer