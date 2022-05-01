import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Source from '../api/Source';
import _ from 'lodash'
import DetailsResultList from './DetailsResultList';
import ClassDetails from './ClassDetails';
import RaceDetails from './RaceDetails';
import SpellDetails
 from './SpellDetails';
export default function DetailsComponent() {

    const[state, setState] = useState();
    const params = useParams();
    const navigate = useNavigate();

   

    async function doApiRequest(){
        if(!_.isNil(params.type || params.name)) {
            const results = await Source.get("/" +params.type +"/"+params.name)   
            setState(results); 
        }
    }

    useEffect(() => {
        doApiRequest();
    }, [params.type, params.name]);


    function onSearch(text) {
        navigate('/details/' + text)
    }
    if(params.type === 'classes'){
        return <ClassDetails results={state}/>
    }
    if(params.type === 'spells'){
        return <SpellDetails results={state}/>
    }
    if(params.type === 'races'){
        return <RaceDetails results={state}/>
    }
    return <h2>Invalid Type</h2>
}