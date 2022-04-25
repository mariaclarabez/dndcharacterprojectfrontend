import React, {useState} from "react";
import data from "./wikiData.json";

const Wiki = () => {
    const [active, setActive] = useState("Races");

    const handleSelect = (event) => {
        setActive(event.target.id);
        console.log(event)
    } 


    return(
        <ul className={`nav mb-2 nav-tabs`}>
            <ul className={`nav nav-tabs flex-nowrap wd-main-section-tabs wd-text-no-wrap`}>
                {data.map(d => 
                    <li className="nav-item">
                        <p id={`${d.title}`} className={`nav-link tab ${d.title === active ? "active" : ""}`} onClick={handleSelect}>{`${d.title}`}</p>
                    </li>
                )}
            </ul>
        </ul>
    )
}

export default Wiki;