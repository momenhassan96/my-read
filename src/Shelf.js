import React from 'react';
import SingleBook from './SingleBook';

const Shelf = (props) => {
    return (
        <div>
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title"> {props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                props.bookData.map((book, $index) => (
                                    <SingleBook key={$index} bookData={book} changeShelf={props.changeShelf} />
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shelf;