import React from "react";
import {Link} from "react-router-dom";

const NavigationItem = ({
    data = {
        "title": "Home", "icon": "fa fas-home", "link": "/"
    },
    active = 'Home'
}) => {
    return(
        <div>
        <Link to={`${data.link}`} id={`${data.title}`} className={`navItem ${active === data.title ? "activeTab" : ""}`} >
            <i className={`${data.icon} navIcon`}/>
            <span className={`navText`}>{data.title}</span>
        </Link>
        </div>
    )
}

export default NavigationItem;