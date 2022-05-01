import React, {useState} from "react";
import "../../styles/index.css";
import {Link} from "react-router-dom";
import {read_cookie, bake_cookie} from "sfcookies";

const Navigation = ({
    active = 'Home'
}) => {

    const uid = read_cookie("userId");
    console.log(uid);

    return(
        <div className={`navBar`}>
                <Link to={`/home`} id={`Home`} className={`navItem ${active === "Home" ? "activeTab" : ""}`} >
                    <i className={`fa fas-home} navIcon`}/>
                    <span className={`navText`}>Home</span>
                </Link>

                <Link to={`/create`} id={`Create`} className={`navItem ${active === "Create" ? "activeTab" : ""}`} >
                    <i className={`fa fas-pen navIcon`}/>
                    <span className={`navText`}>Create</span>
                </Link>
            {uid != "" &&
                <Link to={`/profile`} id={`Profile`}
                      className={`navItem ${active === "Profile" ? "activeTab" : ""}`}>
                    <i className={`fa fas-user navIcon`}/>
                    <span className={`navText`}>Profile</span>
                </Link>
            }
            {uid != "" &&

                <Link to={`/characters/${read_cookie("userId")}`} id={`Characters`} className={`navItem ${active === "Characters" ? "activeTab" : ""}`} >
                        <i className={`fa fas-report navIcon`}/>
                        <span className={`navText`}>Characters</span>
                    </Link>
            }
                <Link to={`/search`} id={`Search`} className={`navItem ${active === "Search" ? "activeTab" : ""}`} >
                    <i className={`fa fas-lightbulb navIcon`}/>
                    <span className={`navText`}>Search</span>
                </Link>
                <Link to={`/`} className={`navItem`} >
                    <i className={`fa fas-lightbulb navIcon`}/>
                    <span className={`navText`}>{uid != "" ? "Log out" : "Log in"}</span>
                </Link>
        </div>
    )
}

export default Navigation;