import React from 'react'
import Results from './Results'

function ResultList({results}) {
    let data = [];
    if (results.data) {
        console.log(results.data);

        data = results.data.results || [];
    }
    console.log(data);
    return(
        <div className="result">
            {data.map((item) => (
                <Results key={item.index} element={item}/>
            ))}
        </div>
    )
}

export default ResultList;