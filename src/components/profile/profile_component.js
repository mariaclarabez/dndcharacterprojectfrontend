import React, {useState, useEffect} from "react";
import {getUser} from "../../api/apiHelper";
import {read_cookie} from "sfcookies";
import Posts from "../post/Posts";

const ProfileComponent = () => {
    const [user, setUser] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [active, setActive] = useState("Posts");
    const [trigger, setTrigger] = useState(true);

    const defaultAvatar = "https://ih1.redbubble.net/image.783510818.4628/st,small,845x845-pad,1000x1000,f8f8f8.u8.jpg";
    const activeUser = read_cookie("profileId") === "" || read_cookie("profileId") === read_cookie("userId");
    const id = activeUser ? read_cookie("userId") : read_cookie("profileId");

    console.log("profile: " + read_cookie("profileId") + "  user: " + read_cookie("userId"));

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser(id);
            const users = await data
            setUser(users[0]);
            console.log(user);
        }
        fetchData();
    }, []);

    const handleSelect = (event) => {
        setActive(event.target.id);
    }

    return (
        <>
            <div className={`profileHeader`}>
                <img
                    src={user.avatar ? `${user.avatar}` : `${defaultAvatar}`}
                    className={`profileAvatar`}/>
                <div className={`profileData`}>
                    <div className={`profileHeaderName`}>
                        Kristi
                    </div>
                    <div className={`profileHeaderUserName`}>
                        @{user.username}
                    </div><hr/>
                    <div className={`profileBio`}>
                        fojai po;awfj;ahef;oapweuhf; ajfsl flafiahdl IEFHLw kehflA,KN akjdhflkan bkjdhbfahbd akhbfabf adhbfl abf lakbf klabdfklahb dfladf akfb khflbf dbfidf hbdf li aoljf ;afa; fhaflahfl ahf ai f  af;half ha;fha hfahfula fhliauegblawfk vjbhvkuy abvl
                    </div>
                </div>
                {activeUser && !showEdit &&
                    <i className={`fas fa-pen editButton`}/>
                }

            </div>

            <div className={`profileBody`}>
                <ul className={`nav mb-2 nav-tabs `}>
                    <ul className={`nav nav-tabs flex-nowrap profile-tabs wd-text-no-wrap`}>
                        <li className="nav-item profileNavItem">
                            <p id={`Posts`} className={`nav-link tab ${"Posts" === active ? "active" : ""}`} onClick={handleSelect}>{`Posts`}</p>
                        </li>
                        <li className="nav-item profileNavItem">
                            <p id={`Characters`} className={`nav-link tab ${"Characters" === active ? "active" : ""}`} onClick={handleSelect}>{`Characters`}</p>
                        </li>
                    </ul>
                </ul>
                {active === "Posts" &&
                    <Posts id={id} triggerReload={trigger}/>
                }
            </div>


        </>
    )
}

export default ProfileComponent;