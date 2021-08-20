import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfSelect from './ShelfSelect';


export class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired,
    }

    actionToSelectShelf = (shelf)=>{
        this.props.updateShelf(this.props.book, shelf);
    }

    render() {
        const {book, shelf} = this.props
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div 
                            className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                // Handle Books without ImageLinks to Avoid Error
                                backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` 
                            }}
                            >
                            </div>
                            <ShelfSelect shelf={shelf} actionToSelectShelf={this.actionToSelectShelf} />
                        </div>
                        <div className="book-title">{book.title}</div>
                        {/* // Handle Books without authors to Avoid Error && Join Method for Multi-authors */}
                        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                </li>
            </div>
        )
    }
}


export default Book

