import React from 'react';
import { Link } from 'react-router-dom';

function OpenSearch() {
    return (
        <div>
            <div className="open-search">
                <Link 
                className='open-search-button'
                to='/search'
                >
                    <i className="fas fa-plus-circle"></i>
                </Link>
            </div>
        </div>
    )
}

export default OpenSearch;
