import React from 'react';
import PropTypes from 'prop-types';
import CloseSearch from './CloseSearch';

function SearchInput(props) {
    const {query,updateQuery, clearQuery} = props
    return (
        <div>
            <div className="search-books-bar">
                <CloseSearch clearQuery={clearQuery} />
                <div className="search-books-input-wrapper">
                    <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(e)=>{updateQuery(e.target.value)}}
                    />
                </div>
            </div>
        </div>
    )
}

SearchInput.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired,
}

export default SearchInput;

