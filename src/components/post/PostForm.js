import React, {useState} from "react";
import {createPost} from "../../api/apiHelper";

const PostForm = () => {
    const [body, setBody] = useState("");
    const availableTags = ['#dm', '#characters', '#maps', '#memes']

    const handleChange = (event) => {
        setBody(event.target.value);
    }

    const handleCreate = async () => {
        const regex = /#[^ ]+/g
        const tags = body.match(regex);
        var validTags = tags != null ? tags.filter(t => availableTags.includes(t)) : [];
        validTags = validTags.join(";");
        const post = {
            "userId": "1",
            "body": body,
            "tags": validTags
        }
        console.log(post);
        const response = await createPost(post);
        console.log(response);
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
                <button className={`post`} onClick={handleCreate}>Post</button>
            </div>
        </div>
    )
}

export default PostForm;