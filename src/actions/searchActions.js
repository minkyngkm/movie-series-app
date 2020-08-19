import { SEARCH_MOVIE, FETCH_MOVIE} from "./type"
import axios from "axios";

export const searchAction  = text  => dispatch =>  
       dispatch({
            type: SEARCH_MOVIE,
            payload: text
       }) 


// when we use the searchAction function in our component, text will be passed in the search Action function 
// and since payload is text and in our reducer, i set if action.type === SEARCH_MOVIE, text: action.payload is returned. 
// so when in our component we get a text as input, it will be our action.payload and the state text will be changed! 

// 원래는 action 은 객체. 밑에가 진짜 action!
// {
//     type: SEARCH_MOVIE,
//     payload: text
// }
// 근데 dispatch 가 action 을 전달해야하니까, 
// dispatch ( action )

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovie = text => dispatch => {
    
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`)
    .then( response =>
        dispatch({
            type: FETCH_MOVIE,
            payload: response.data['Search']
        })
    ).catch( error => console.log(error))
}
