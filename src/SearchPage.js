import React, { Component } from 'react';
import SearchInput from './SearchInput';
class SearchPage extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchInput />
                <div className="search-books-results">
                    <ol className="books-grid">
                        <li>MOMMMM</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;