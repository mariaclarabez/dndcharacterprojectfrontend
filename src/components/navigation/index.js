import React, {useState} from "react";
import "../../styles/index.css";
import navData from "./navData.json";
import NavigationItem from "./NavigationItem";
import Link from "react-dom";

const Navigation = ({
    active = 'Home'
}) => {
    return(
        <div className={`navBar`}>
                {navData.map(d =>
                    <NavigationItem data={d} active={active}/>
                )}
        </div>
    )
}

export default Navigation;