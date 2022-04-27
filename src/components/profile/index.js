import React from "react";
import ProfileComponent from "./profile_component";
import Navigation from "../navigation";

const Profile = () => {

    return (
        <>
        <div className={"row header"}>
            <span>Wizards and Shit</span>
        </div>
        <div className={"row flex-noWrap"}>
            <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                <Navigation active={'Profile'}/>
            </div>
            <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
                <ProfileComponent/>
            </div>
        </div>
    </>
    )
}

export default Profile;