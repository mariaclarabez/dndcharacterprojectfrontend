import React, {useState} from "react";
import {createPost} from "../../api/apiHelper";

const PostForm = ({onPost, setBody}) => {

    const handleChange = (event) => {
        setBody(event.target.value);
    }

    return (
        <div className={`postForm flex-noWrap`}>
            <img
                src={`https://static.vecteezy.com/system/resources/previews/004/649/010/large_2x/cute-wizard-mascot-free-vector.jpg`}
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