import React from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: {},
    typesOfShelves: ['currentlyReading', 'wantToRead', 'read']
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const _books = {};
      for (let i = 0; i < this.state.typesOfShelves.length; i++) {
        _books[this.state.typesOfShelves[i]] = [];
        for (let x = 0; x < books.length; x++) {
          if (books[x].shelf === this.state.typesOfShelves[i]) {
            _books[this.state.typesOfShelves[i]].push(books[x]);
          }
        }
      }
      this.setState(() => ({ books:_books }));
    });
  }
  render() {
    return (
      <div className="app">
        {this.state.books && <Route exact path="/" render={() => (<BookShelves books={this.state.books} typesOfShelves={this.state.typesOfShelves}/>)}/>}
        <Route path="/search" render={() => (<SearchPage />)} />
      </div>
    )
  }
}

export default BooksApp
