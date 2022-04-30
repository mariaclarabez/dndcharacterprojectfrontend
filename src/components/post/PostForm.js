import React, {useState} from "react";
import {createPost} from "../../api/apiHelper";
import {read_cookie} from "sfcookies";

const PostForm = ({onPost, setBody}) => {

    const handleChange = (event) => {
        setBody(event.target.value);
    }

    return (
        <div className={`postForm flex-noWrap`}>
            <img
                src={`${read_cookie("userAvatar")}`}
                className={`postAvatarImg`}/>
            <div className={'textAreaForm'}>
                <textarea placeholder={"sup"}
                          onChange={handleChange}
                          className={`textArea`}/>
                <button className={`post`} onClick={onPost}>Post</button>
            </div>
        </div>
    )
}

export default PostForm;