import React from "react";
import data from "./postData.json";
import Post from "./Post";

const Posts = ({active = 'all'}) => {
    return (
        <div className={`postsMain`}>
            {data.filter(d => {
                var tags = d.tags.split(';');
                return active === 'all' ? true : tags.includes(active);
            })
                  .map(d => <Post data={d}/>)}
        </div>
    )
}

export default Posts;