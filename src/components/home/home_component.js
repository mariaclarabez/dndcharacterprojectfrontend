import React, {useState} from "react";
import "../../index.css";
import PostForm from "../post/PostForm";
import Posts from "../post/Posts";
import {createPost} from "../../api/apiHelper";


const HomeComponent = () => {
    const [active, setActive] = useState('all');
    const [body, setBody] = useState('');
    const [newPost, setNewPost] = useState(false);
    const availableTags = ['#dm', '#characters', '#maps', '#memes'];

    const handleClick = (event) => {
        setActive(event.target.id);
    };

    const handleCreate = async () => {
        console.log(body);
        const regex = /#[^ ]+/g
        const tags = body.match(regex);
        var validTags = tags != undefined ? tags.filter(t => availableTags.includes(t)) : [];
        validTags = validTags.join(";");
        const post = {
            "userId": 1,
            "body": body,
            "tags": validTags
        }
        console.log(post);
        const response = await createPost(post.userId, post.body, post.tags);
        setNewPost(!newPost);
    };
    return(
        <div className={"container homeCenter"}>
            <div className={`postArea`}>
                <PostForm onPost={handleCreate} setBody={setBody}/>
            </div>
            <ul className={`nav mb-2 nav-tabs`}>
                <ul className={`nav nav-tabs flex-nowrap wd-main-section-tabs wd-text-no-wrap`}>
                    <li className={`nav-item`}>
                        <span id={'all'}
                              className={`nav-link ${active === 'all' ? 'active' : ''}`}
                              onClick={handleClick}>All</span>
                    </li>
                    <li className={`nav-item`}>
                        <span id={'following'}
                              onClick={handleClick}
                              className={`nav-link ${active === 'following' ? 'active' : ''}`}>Following</span>
                    </li>
                    <li className={`nav-item`}>
                        <span id={'dm'}
                              onClick={handleClick}
                              className={`nav-link ${active === 'dm' ? 'active' : ''}`}>Dungeon Masters</span>
                    </li>
                    <li className={`nav-item`}>
                        <span id={'maps'}
                              onClick={handleClick}
                              className={`nav-link ${active === 'maps' ? 'active' : ''}`}>Maps</span>
                    </li>
                    <li className={`nav-item`}>
                        <span id={'characters'}
                              onClick={handleClick}
                              className={`nav-link ${active === 'characters' ? 'active' : ''}`}>Characters</span>
                    </li>
                    <li className={`nav-item`}>
                        <span id={'memes'}
                              onClick={handleClick}
                              className={`nav-link ${active === 'memes' ? 'active' : ''}`}>Memes</span>
                    </li>

                </ul>
            </ul>
            <Posts active={active} triggerReload={newPost}/>
        </div>
    );
}

export default HomeComponent;