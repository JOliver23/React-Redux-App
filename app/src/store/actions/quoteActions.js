//thunks
//an inner function thats returned by an outer function
import axios from 'axios';

export const fetchQuote = () => {
    return dispatch => {
        dispatch({type: "FETCH_QUOTE-START"})
        axios
            .get('https://api.kanye.rest/')
            .then(res => {
                dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote})
            })
            .catch(err => console.log(err.response))
    }
}