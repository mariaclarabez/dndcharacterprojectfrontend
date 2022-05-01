import _ from 'lodash';
import ResultList from './ResultList';
import SearchBar from './SearchBar'
import React, { useState, useEffect} from 'react'
import Source from '../api/Source'
import { useParams, useNavigate} from 'react-router-dom';
import './search.css'
import Navigation from './navigation';


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
        <>
        <div className={"row header"}>
            <span>Dungons and Dragons Forum</span>
        </div>
        <div className={"row flex-noWrap"}>
            <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                <Navigation active={'Home'}/>
            </div>
            <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>

                <div className={'search'}>
                    <div className="search-title"><h2>Search the Dungeons and Dragons 5th Edition API</h2>
                    <div className="search-container"><SearchBar onSearch={onSearch}/> </div>
                </div>
                    
                <ResultList results={state}/>
            </div>
        </div>
        </div>
    </>

    )

}