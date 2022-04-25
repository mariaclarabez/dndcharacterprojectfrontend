import React from "react";
import "../../index.css";
import navData from "./navData.json";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return(
        <div className={"navBar"}>
            {navData.map(d => <NavigationItem data={d}/>)}
        </div>
    )
}

export default Navigation;