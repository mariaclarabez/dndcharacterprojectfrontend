import React from "react";
import "../../index.css";
import PostForm from "../post/PostForm";
import Posts from "../post/Posts";


const HomeComponent = () => {
    return(
        <div className={"container homeCenter"}>
            <div className={`postArea`}>
                <PostForm/>
            </div>
            <hr/>
            <Posts/>
        </div>
    );
}

export default HomeComponent;