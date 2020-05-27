import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {fetchQuote} from '../store/actions/quoteActions';

const KanyeQuote = props => {
    useEffect(() => {
        //call an action creator
        props.fetchQuote()
    }, []);

    // if (props.isFetching) {
    //     return <Loader />
    // }
    return (
        <div>
            <h1>Be Your Kanye Best</h1>
            {props.isFetching && <Loader type="Hearts" color="pink" height={100} width={100} timeout={10000} />}
            {props.error && <p className="error">{props.error}</p>}
            {props.quote && <h3>"{props.quote}"</h3>}
            <button onClick={props.fetchQuote}>Become A New Kanye</button>
        </div>
    )
};

const mapSTateToProps = state => {
    console.log(state);
    return {
        quote: state.quote.quote,
        isFetching: state.quote.isFetching,
        error: state.quote.error
    }
}

export default connect(
    mapSTateToProps,
    {fetchQuote}
)(KanyeQuote);