import { SEARCH_MOVIE } from "./type"

const searchAction  = text  => dispatch =>  
       dispatch({
            type: SEARCH_MOVIE,
            payload: text
       }) 
    
export default searchAction    


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

