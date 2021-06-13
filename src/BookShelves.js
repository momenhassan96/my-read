import React, { Component } from 'react';
import AddNewBook from './AddNewBook';
import SingleBook from './SingleBook';

class BookShelves extends Component {
    render() {
        const {books} = this.props;
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">TEST</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <SingleBook />
                            </ol>
                        </div>
                    </div>
                </div>
                <AddNewBook />
            </div>


        )
    }
}



export default BookShelves;