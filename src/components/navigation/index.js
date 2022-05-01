import React from "react";
import "../../styles/index.css";
import {Link} from "react-router-dom";
import {read_cookie} from "sfcookies";

const Navigation = ({
    active = 'Home'
}) => {

    const uid = read_cookie("userId");
    const role = read_cookie("userRole");
    console.log(uid);

    return(
        <div className={`navBar`}>
                <Link to={`/`} id={`Home`} className={`navItem ${active === "Home" ? "activeTab" : ""}`} >
                    <i className={`fa fas-home} navIcon`}/>
                    <span className={`navText`}>Home</span>
                </Link>
            {role !== "anon" && role !== "member" &&
                <Link to={`/create`} id={`Create`} className={`navItem ${active === "Create" ? "activeTab" : ""}`}>
                    <i className={`fa fas-pen navIcon`}/>
                    <span className={`navText`}>Create</span>
                </Link>
            }
            {role !== "anon" &&
                <Link to={`/profile`} id={`Profile`}
                      className={`navItem ${active === "Profile" ? "activeTab" : ""}`}>
                    <i className={`fa fas-user navIcon`}/>
                    <span className={`navText`}>Profile</span>
                </Link>
            }
                <Link to={`/search`} id={`Search`} className={`navItem ${active === "Search" ? "activeTab" : ""}`} >
                    <i className={`fa fas-lightbulb navIcon`}/>
                    <span className={`navText`}>Search</span>
                </Link>            
                <Link to={`/login`} className={`navItem`} >
                    <i className={`fa fas-lightbulb navIcon`}/>
                    <span className={`navText`}>{role !== "anon" ? "Log out" : "Log in"}</span>
                </Link>
            {uid !== "" &&

                <Link to={`/characters/${read_cookie("userId")}`} id={`Characters`} className={`navItem ${active === "Characters" ? "activeTab" : ""}`} >
                        <i className={`fa fas-report navIcon`}/>
                        <span className={`navText`}>Characters</span>
                    </Link>
            }


        </div>
    )
}

export default Navigation;