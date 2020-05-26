const intitialState = {
    quote: '',
    isFetching: false,
    error: ''
}

export const quoteReducer = (state = intitialState, action) => {
    switch(action.type) {
        case 'FETCH_QUOTE-START':
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
};