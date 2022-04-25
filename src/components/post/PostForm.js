import React from "react";

const PostForm = () => {
    return (
        <div className={`postForm flex-noWrap`}>
            <img
                src={`https://static.vecteezy.com/system/resources/previews/004/649/010/large_2x/cute-wizard-mascot-free-vector.jpg`}
                className={`postAvatarImg`}/>
            <div className={'textAreaForm'}>
                <textarea placeholder={"sup"} className={`textArea`}/>
                <button className={`post`}>Post</button>
            </div>
        </div>
    )
}

export default PostForm;