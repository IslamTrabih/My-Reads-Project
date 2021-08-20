import React from 'react';
import PropTypes from 'prop-types';
import Book from '../my_read_book/Book';

function BooksResults(props) {
    const {books, searchBooks, updateShelf} = props

    // Check Shelf of Books with Book from Backend Response to change shelf (Link Shelf of Books with Book from Backend Response)
    const updatedBooksShelf = searchBooks && searchBooks.map((book)=>{
        books.map((b)=>{
            if(b.id === book.id){
                book.shelf = b.shelf;
            }
            return b;
        })
        return book;
    })

    return (
        <div>
            <ol className="books-grid">
                {updatedBooksShelf.map((book)=>{
                    return(
                        <Book 
                        key={book.id}
                        book={book}
                        updateShelf={updateShelf}
                        shelf={(book.shelf)?book.shelf:'none'}
                        />
                    )
                })}
            </ol>
        </div>
    )
}

BooksResults.propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default BooksResults;

