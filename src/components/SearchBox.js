import React from "react";

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='pa4 ba b--black bg-white'
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>

    )
}

export default SearchBox;