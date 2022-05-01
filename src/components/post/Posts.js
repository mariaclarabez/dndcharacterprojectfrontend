import React, { useState, useEffect } from "react";
import data from "./postData.json";
import { getAllPosts, getUserPosts } from "../../api/apiHelper";
import Post from "./Post";
import {read_cookie} from "sfcookies";

const Posts = ({active = 'all', triggerReload, id = null}) => {
    const [posts, setPosts] = useState([]);
    const activeUser = read_cookie("userId");
    async function fetchData() {
        const filteredPosts = id == null ? await getAllPosts(activeUser) : await getUserPosts(id, activeUser);
        setPosts(await filteredPosts.reverse());
    }
    
    useEffect (() => {
        fetchData();
    }, [active, triggerReload]);

    console.log(posts);
    return (
        <div className={`postsMain`}>
            {posts.filter(d => {
                return active === 'all' || d.tags.includes('#' + active);
            }).map(d => <Post data={d} reload={fetchData}/>)}
        </div>
    );
}

export default Posts;