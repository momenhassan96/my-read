import React from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: [],
    resultOfSearch: [],
  }
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({ books: books }));
    })
    .catch((error) => {
      console.log(error)
    });
  }

  resetSearchPage = () => {
    this.setState(() => ({
      resultOfSearch: [],
    }))
  }

  searchBook = (value) => {
    BooksAPI.search(value).then(res => {
      if (res) {
        for (let i = 0; i < res.length; i++) {
          for (let x = 0; x < this.state.books.length; x++) {
            if (this.state.books[x].id === res[i].id) {
              res[i].shelf = this.state.books[x].shelf;
            }
          }
        }
        this.setState(() => ({
          resultOfSearch: res,
        }))
      } else {
        this.setState(() => ({
          resultOfSearch: [],
        }))
      }

    }).catch((error) => {
      console.log(error, "error")
    });
  }

  changeShelf = (book, nextShelf) => {
    book.shelf = nextShelf;
    this.setState((currentState) => ({
      books: [...currentState.books.filter(books =>books.id !== book.id), book],
    }))
    BooksAPI.update(book, nextShelf)
  }

  render() {
    return (
      <div className="app">
        {this.state.books && <Route exact path="/" render={() => (<BookShelves books={this.state.books} changeShelf={this.changeShelf} />)} />}
        <Route path="/search" render={() => (<SearchPage changeShelf={this.changeShelf} resultOfSearch={this.state.resultOfSearch} searchBook={this.searchBook} onNavigate={this.resetSearchPage} />)} />
      </div>
    )
  }
}

export default BooksApp;