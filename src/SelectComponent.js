import React from 'react';



const SelectComponent = (props) => {
    const onChangeShelf = (event) => {
        props.onChangeShelf(props.bookData, event);
    }
    return (
        <select value={!props.bookData.shelf ? 'none' : props.bookData.shelf} onChange={(e) => onChangeShelf(e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}
export default SelectComponent;