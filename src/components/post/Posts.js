import React, { useState, useEffect } from "react";
import data from "./postData.json";
import { getAllPosts, getUserPosts } from "../../api/apiHelper";
import Post from "./Post";

const Posts = ({active = 'all', triggerReload, id = null}) => {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const filteredPosts = id == null ? await getAllPosts() : await getUserPosts(id);
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