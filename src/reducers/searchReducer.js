import { SEARCH_MOVIE } from '../actions/type'

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
        default: 
            return state
    }
}

export default searchReducer