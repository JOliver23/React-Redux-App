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
            .catch(err => {
                dispatch({type : 'FETCH_QUOTE_FAILURE', payload: err.response.data})
            })
    }
}