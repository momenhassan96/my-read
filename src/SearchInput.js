import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchInput extends Component {

    render() {
        return (
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.props.value} onChange={(e) => this.props.onSearch(e.target.value)} />
                </div>
            </div>
        )
    }
}


export default SearchInput;