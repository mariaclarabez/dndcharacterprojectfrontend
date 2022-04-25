import React, {useState} from "react";
import "../../styles/index.css";
import navData from "./navData.json";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    const [active, setActive] = useState('Home');

    const handleClick = (event) => {
        setActive(event.target.id);
    }
    return(
        <div className={`navBar`}>
            {navData.map(d =>
                <div id={`${d.title}`}className={`navItem ${active === d.title ? "activeTab" : ""}`} onClick={handleClick}>
                    <i className={`${d.icon} navIcon`}/>
                    <span>{d.title}</span>
                </div>
            )}
        </div>
    )
}

export default Navigation;