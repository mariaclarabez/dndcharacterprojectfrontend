import React from "react";
import data from "./postData.json";
import Post from "./Post";

const Posts = () => {
    return (
        <div className={`postsMain`}>
            {data.map(d => <Post data={d}/>)}
        </div>
    )
}

export default Posts;