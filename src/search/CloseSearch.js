import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CloseSearch(props) {
    const {clearQuery} = props
    return (
        <div>
            <Link 
            className="close-search" 
            to='/'
            onClick={clearQuery}
            >
                <i className="fas fa-arrow-circle-left"></i>
            </Link>
        </div>
    )
}

CloseSearch.propTypes = {
    clearQuery: PropTypes.func.isRequired,
}

export default CloseSearch;

