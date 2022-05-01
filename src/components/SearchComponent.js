import _ from 'lodash';
import ResultList from './ResultList';
import SearchBar from './SearchBar'
import React, { useState, useEffect} from 'react'
import Source from '../api/Source'
import { useParams, useNavigate} from 'react-router-dom';

export default function SearchComponent() {
    const[state, setState] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

   

    async function doApiRequest(){
        if(!_.isNil(params.searchTerm)) {
            const results = await Source.get("/" +params.searchTerm)   
            setState(results); 
        }
    }

    useEffect(() => {
        doApiRequest();
    }, [params.searchTerm]);


    function onSearch(text) {
        navigate('/search/' + text)
    }

    return (
        <div>
            <div className="container searchApp"></div>
            <h2>Search the Dnd 5e API</h2>
            <SearchBar onSearch={onSearch}/>
            <ResultList results={state}/>
        </div>
    )

}