import React, { useState, useEffect } from "react";
import data from "./postData.json";
import { getAllPosts } from "../../api/apiHelper";
import Post from "./Post";

const Posts = ({active = 'all', triggerReload}) => {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const filteredPosts = await getAllPosts();
            setPosts(await filteredPosts.reverse());
        }
        fetchData();

    }, [active, triggerReload]);

    return (
        <div className={`postsMain`}>
            {posts.filter(d => {
                return active === 'all' || d.tags.includes('#' + active);
            }).map(d => <Post data={d}/>)}
        </div>
    );
}

export default Posts;