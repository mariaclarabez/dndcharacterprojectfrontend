import React from "react";

const NavigationItem = ({
    data =   {
        "title": "Home", "icon": "fa fas-home", "link": "/"
    },
}) => {
    return(
        <div className={"navItem"}>
            <i className={`${data.icon} navIcon`}/>
            <span>{data.title}</span>
        </div>
    )
}

export default NavigationItem;