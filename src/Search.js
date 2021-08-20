import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Book from './my_read_book/Book';
import SearchInput from './search/SearchInput';
import SearchKeywords from './search/SearchKeywords';
import BooksResults from './search/BooksResults';

// for Test
// import * as BooksAPI from './BooksAPI';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchBooks: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
        searchForBooks: PropTypes.func.isRequired,
    }

    state = {
        query:'',

        // // for Test
        // searchBooks: [],
    }

    // Update Query According to Search Input
    updateQuery =(query)=>{
        this.setState((prevState)=>{
            return(
                {query: query,}
            )
        })
        this.props.searchForBooks(query);

        // // for Test
        // if(query !== ''){
        //     BooksAPI.search(query)
        //     .then((books)=>{
        //         console.log(books)
        //         this.setState((prevState)=>{
        //             return(
        //                 {searchBooks: books}
        //             )
        //         })
        //     })
        // }
    }

    // to Clear Query and Remove Results when Close Search Page
    clearQuery = ()=>{
        this.updateQuery('');
    }

    render() {
        const {query} = this.state
        const {books, searchBooks, updateShelf} = this.props

        return (
            <div>
                <div className="search-books">
                    <SearchInput 
                    query={query}
                    updateQuery={this.updateQuery}
                    clearQuery={this.clearQuery}
                    />
                    <div className="search-books-results">
                        <SearchKeywords 
                        query={query}
                        searchBooks={searchBooks}
                        />
                        
                        {/* for Test
                        {JSON.stringify(query)}
                        {JSON.stringify(searchBooks.map((book)=>{
                            return(book.title)
                        }))} */}

                        <BooksResults 
                        books={books}
                        searchBooks={searchBooks}
                        updateShelf={updateShelf}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
