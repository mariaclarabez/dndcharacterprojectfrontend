import React, { useState } from 'react'
import './search.css'


function SearchBar(props) {
    const { onSearch} = props;
    const [searchText, setSearchText] = useState('');

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }


    return (
        <div>
            <div className="control">
                <input className="input input-field" type="text" onChange={handleInput} value={searchText}
                onKeyPress={handleEnterKeyPressed} placeholder="Search spells, races, or classes" />
            </div>

        </div>
    )
}

export default SearchBar;