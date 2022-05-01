import React, { useState } from 'react'


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
                <input className="input" type="text" onChange={handleInput} value={searchText}
                onKeyPress={handleEnterKeyPressed} placeholder="Search spells, races, or classes" />
            </div>

        </div>
    )
}

export default SearchBar;