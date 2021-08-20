import React from 'react';
import PropTypes from 'prop-types';
import BookShelfs from './my_read_book/BookShelfs';
import OpenSearch from './my_read_book/OpenSearch';

function MyReadBook(props) {
    const {shelves, books, updateShelf} = props
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelfs shelves={shelves} books={books} updateShelf={updateShelf} />
                </div>
                <OpenSearch />
            </div>
        </div>
    )
}

MyReadBook.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default MyReadBook;
