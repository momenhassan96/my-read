import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SingleBook from './SingleBook';
class SearchPage extends Component {
    state = {
        searchInput: '',
    }

    componentDidMount() {
        this.props.onNavigate()
    }
     
    search = (value) => {
        this.setState({ searchInput: value }, () => {
            this.props.searchBook(this.state.searchInput)
        })
    }

    render() {
        return (
            <div className="search-books">
                <SearchInput onSearch={this.search} value={this.state.searchInput} />
                {this.props.resultOfSearch.length ?
                    (<ol className="books-grid">
                        {
                            this.props.resultOfSearch.map((book, $index) => (
                                <SingleBook key={$index} bookData={book} changeShelf={this.props.changeShelf} />
                            ))
                        }
                    </ol>) : ''
                }
            </div>
        )
    }
}

export default SearchPage;