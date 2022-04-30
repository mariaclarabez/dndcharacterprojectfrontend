import React, {useState} from "react";
import PostForm from "./PostForm";
import {likePost, postReply} from "../../api/apiHelper";
import Replies from "./Replies";
import {useNavigate} from 'react-router-dom';
import {bake_cookie, read_cookie} from "sfcookies";


const Post = ({
    data = {
        "id": 1,
        "userId": 2,
        "username": "dragonLady83",
        "avatar": "https://images-na.ssl-images-amazon.com/images/I/51z8u+zkNUL.jpg",
        "body": "fun fact- dragons don't always breathe fire",
        "likes": 0,
        "replies": 0,
        "shares": 0

    }
}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyBody, setReplyBody] = useState('');
    const [likes, setLikes] = useState(data.likes);
    const [trigger, setTrigger] = useState(false);

    const navigate = useNavigate();

    console.log(`in post: ${data.id}`)
    const onPost = async () => {
        await postReply(data.id, 1, replyBody);
        data.replies = data.replies + 1;
        setTrigger(!trigger);
    }
    const onLike = () => {
        likePost(data.id);
        setLikes(likes + 1);
    }
    
    const onReply = () => {
        setShowReplyForm(!showReplyForm);
    }
    
    const onShare = () => {
        
    }

    const toProfile = (event) => {
        bake_cookie("profileId", event.target.id);
        navigate("/profile");
    }
    
    return(
        <>
            <div className={`post`}>
                <img
                    src={data.avatar}
                    className={`postAvatarImg`}/>
                <div>
                    <div id={data.userId} className={`username`} onClick={toProfile}>{data.username}</div>
                    <div className={`body`}>{data.body}</div>
                    <div className={`stats`}>
                        <div onClick={onLike}>
                            <i className={`fas fa-heart stat`}/>
                            {likes}
                        </div>
                        <div onClick={onReply}>
                            <i className={`fas fa-comment stat`}/>
                            {data.replies}
                        </div>
                        <div onClick={onShare}>
                            <i className={`fas fa-share stat`}/>
                            {data.shares}
                        </div>
                    </div>
                </div>
            </div>
            {showReplyForm &&
                <div className={`replyForm`}>
                    {data.replies > 0 &&
                        <Replies parent={data.id} refresh={trigger}/>
                    }
                    {read_cookie("userId") != "" &&
                        <PostForm onPost={onPost} setBody={setReplyBody}/>
                    }
                </div>
            }
        </>
    )
}

export default Post;