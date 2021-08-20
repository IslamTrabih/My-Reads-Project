import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


function BookShelfs(props) {
    const {shelves, books, updateShelf} = props
    return (
        <div>
            {shelves.map((shelf)=>{
                return(
                    <BookShelf key={shelf.id} shelf={shelf} books={books} updateShelf={updateShelf} />
                )
            })}
        </div>
    )
}

BookShelfs.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}


export default BookShelfs;
