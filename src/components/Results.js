import React from 'react'
import {Link} from 'react-router-dom';

export default function Results(props) {
    const {element} = props;
    console.log(element);

    return (
        <Link to={"/details"+element.url.substring(4)}>
            <div className='resultCard'>
                <h4>{element.name}</h4>
            </div>
        </Link>
    );
}