import React, {useState} from "react";
import PostForm from "./PostForm";
import {likePost} from "../../api/apiHelper";

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

    const onPost = () => {

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
    
    return(
        <>
            <div className={`post`}>
                <img
                    src={data.avatar}
                    className={`postAvatarImg`}/>
                <div>
                    <div className={`username`}>{data.username}</div>
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
                    <PostForm onPost={onPost} body={setReplyBody}/>
                </div>
            }
        </>
    )
}

export default Post;