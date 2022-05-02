import React from "react";
import CharacterView from "./characterView";
import Navigation from "../navigation";


const CharacterScreen = () => {
    return (
        <>
            <div className={"row header"}>
                <span><b>Dungeons and Dragons Forum</b></span>
            </div>
            <div className={"row flex-noWrap"}>
                <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                    <Navigation active={'Create'}/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
                    <CharacterView/>
                </div>
            </div>
        </>
    );
}

export default CharacterScreen;