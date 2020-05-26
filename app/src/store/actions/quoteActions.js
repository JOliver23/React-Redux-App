//thunks
//an inner function thats returned by an outer function

export const fetchQuote = () => {
    return dispatch => {
        dispatch({type: "FETCH_QUOTE-START"})
    }
}