import React from 'react';
import AddNewBook from './AddNewBook';
import Shelf from './Shelf';

const BookShelves = (props) => {
    const { books, changeShelf } = props;
    const cuurentlyReading = books.filter(type => type.shelf === 'currentlyReading');
    const wantToRead = books.filter(type => type.shelf === 'wantToRead');
    const read = books.filter(type => type.shelf === 'read');
    return (
        <div>
            <section>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf bookData={cuurentlyReading} title={'Currently reading'} changeShelf={changeShelf} />
                <Shelf bookData={wantToRead} title={'Want To Read'} changeShelf={changeShelf} />
                <Shelf bookData={read} title={'Read'} changeShelf={changeShelf} />
                <AddNewBook />
            </section>
        </div>
    )
}
export default BookShelves;
