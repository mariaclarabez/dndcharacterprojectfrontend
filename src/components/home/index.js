import React from "react";
import HomeComponent from "./home_component";
import Navigation from "../navigation";
import Wiki from "../wiki";
import '../../styles/index.css';

const Index = () => {
    return (
        <>
            <div className={"row header"}>
                <span>Wizards and Shit</span>
            </div>
            <div className={"row flex-noWrap"}>
                <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                    <Navigation active={'Home'}/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
                    <HomeComponent/>
                </div>
            </div>
        </>
    );
}

export default Index;