import React from 'react';
import SelectComponent from './SelectComponent';


const SingleBook = (props) => {
    return (
        <li>
            {props.bookData &&
                <div className="book">
                    <div className="book-top">
                        {props.bookData.imageLinks && (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.bookData.imageLinks.thumbnail ? props.bookData.imageLinks.thumbnail : props.bookData.imageLinks.smallThumbnail})` }}></div>)}
                        <div className="book-shelf-changer">
                            <SelectComponent bookData={props.bookData} onChangeShelf={props.changeShelf} />
                        </div>
                    </div>
                    <div className="book-title">{props.bookData.title}</div>
                    <div className="book-authors">
                        {props.bookData.hasOwnProperty('authors') && props.bookData.authors.length ? (<div>
                            {props.bookData.authors.map((author, $index) => (
                                <span key={$index}>{author}</span>
                            ))}
                        </div>) : ''}
                    </div>
                </div>
            }
        </li>
    )
}

export default SingleBook;