import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './css/App.css';
import Search from './Search';
import MyReadBook from './MyReadBook';
// for Import Icons
import './css/fontawesome.min.css';
import './css/solid.min.css';


class BooksApp extends React.Component {
  state = {
    books: [],
    // Array for search Page
    searchBooks: [],
  }

  // Array of Bookshelves 
  bookshelves = [
    {id: 'currentlyReading', name: 'Currently Reading', icon: <i className="fas fa-book-reader"></i>},
    {id: 'wantToRead', name: 'Want to Read', icon: <i className="fas fa-bookmark"></i>},
    {id: 'read', name: 'Read', icon: <i className="fas fa-book"></i>},
  ]

  // Get All Books According to Shelves that I Put them from Search Page
  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{

      // // for Test
      // {console.log('books', books)}

      this.setState((pervState)=>{
        return(
          {books: books}
        )
      })
    })
  }

  // Update Book Shelf When changing
  updateShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf)
    .then((books)=>{
      // // return Book id Array According to Shelf After update
      // console.log(books)
    });
    // update Local State by Book id that I Want to Change
    let updateState = this.state.books.filter((b)=>{
      return(
        b.id !== book.id
      )
    })
    if(shelf !== 'none'){
      book.shelf = shelf;
      updateState = updateState.concat(book);
    }

    // const updateState = this.state.books.map((b)=>{
    //   if(b.id === book.id){
    //     b.shelf = shelf
    //   }
    //   return b;
    // });

    // updateState return Array of Books with update Book Shelf that Changed
    this.setState((pervState)=>{
      return(
        {books: updateState}
      )
    });
  }

  // Get All Books (Max 20) that Match with Search Keyword from Backend 
  search = (query)=>{
    if(query !== ''){
      BooksAPI.search(query)
      .then((books)=>{
        if(books.error){
          this.setState((pervState)=>{
            return(
              {searchBooks: []}
            )
          })
        }else{
          this.setState((pervState)=>{
            return(
              {searchBooks: books}
            )
          })
        }
      })
    }else{
      this.setState((pervState)=>{
        return(
          {searchBooks: []}
        )
      })
    }
  }

  render() {
    const {books, searchBooks} = this.state
    return (
      <div className="app">
        <Route exact path='/' render={()=>{
          return(
            <MyReadBook 
            shelves={this.bookshelves}
            books={this.state.books}
            updateShelf={this.updateShelf}
            />
          )
        }}
        />
        <Route path='/search' render={()=>{
          return(
            <Search 
            books={books}
            searchBooks={searchBooks}
            updateShelf={this.updateShelf}
            searchForBooks={this.search}
            />
          )
        }}
        />
      </div>
    )
  }
}

export default BooksApp
