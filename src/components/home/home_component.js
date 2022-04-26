import React, {useState} from "react";
import "../../index.css";
import PostForm from "../post/PostForm";
import Posts from "../post/Posts";


const HomeComponent = () => {
    const [active, setActive] = useState('all');
    const handleClick = (event) => {
        setActive(event.target.id);
    }
    return(
        <div className={"container homeCenter"}>
            <div className={`postArea`}>
                <PostForm/>
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
            <Posts active={active}/>
        </div>
    );
}

export default HomeComponent;