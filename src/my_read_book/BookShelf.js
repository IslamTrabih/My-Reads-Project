import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
    static propTypes = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
    }

    render() {
        const {shelf, books, updateShelf} = this.props
        const booksMatchsShelf = books.filter((b)=>{
            return(
                b.shelf === shelf.id
            )
        })
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">
                        {shelf.icon}
                        {shelf.name}
                    </h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {booksMatchsShelf.map((book)=>{
                                return(
                                    <Book key={book.id} book={book} shelf={shelf.id} updateShelf={updateShelf} />
                                )
                            })}
                            
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf;
