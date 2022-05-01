import React, {useState} from "react";
import PostForm from "./PostForm";
import {likePost, postReply, deletePost, unlikePost} from "../../api/apiHelper";
import Replies from "./Replies";
import {useNavigate} from 'react-router-dom';
import {bake_cookie, read_cookie} from "sfcookies";
import PromptLoginModal from "../login/PromptLoginModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

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

    },
    reload
}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyBody, setReplyBody] = useState('');
    const [likes, setLikes] = useState(data.likes);
    const [trigger, setTrigger] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const navigate = useNavigate();
    const role = read_cookie("userRole");

    console.log(`in post: ${data.id}`)
    const onPost = async () => {
        await postReply(data.id, read_cookie("userId"), replyBody);
        data.replies = data.replies + 1;
        setTrigger(!trigger);
    }

    const handleCancelLogin = () => {
        setShowLogin(false);
    }

    const onLike = async () => {
        if (role !== 'anon') {
            if (data.liked === "FALSE") {
                await likePost(data.id, read_cookie("userId"));
            }
            else{
                await unlikePost(data.id, read_cookie("userId"));
            }
            reload();
        }
        else{
            setShowLogin(true);
        }
    }
    
    const onReply = () => {
        setShowReplyForm(!showReplyForm);
    }
    
    const handleDeletePost = () => {
        setShowConfirmDelete(true);
    }
    
    const confirmDelete = async () => {
        await deletePost(data.id);
        setShowConfirmDelete(false);
        setTrigger(!trigger);
    }
    
    const cancelDelete = () => {
        setShowConfirmDelete(false);
    }

    const toProfile = (event) => {
        navigate("/profile/" + event.target.id);
    }
    
    return(
        <>
            {showLogin &&
                <PromptLoginModal onCancel={handleCancelLogin}/>
            }
            {showConfirmDelete &&
                <ConfirmDeleteModal onSave={confirmDelete} onCancel={cancelDelete}/>
            }
            <div className={`post`}>
                <img
                    src={data.avatar}
                    className={`postAvatarImg`}/>
                <div>
                    <div id={data.userId} className={`username`} onClick={toProfile}>@{data.username}</div>
                    <div className={`body`}>{data.body}</div>
                    <div className={`stats`}>
                        <div onClick={onLike}>
                            {data.liked === "TRUE"
                                ?
                                <i className={`fas fa-heart stat`}/>
                                :
                                <i className={`far fa-heart stat`}/>
                            }
                            {data.likes}
                        </div>
                        <div onClick={onReply}>
                            <i className={`fas fa-comment stat`}/>
                            {data.replies}
                        </div>
                    </div>
                </div>
                {role === "admin" &&
                    <i className={`fas fa-times`} onClick={handleDeletePost}/>
                }
            </div>
            {showReplyForm &&
                <div className={`replyForm`}>
                    {data.replies > 0 &&
                        <Replies parent={data.id} refresh={trigger}/>
                    }
                    {role !== "anon" &&
                        <PostForm onPost={onPost} setBody={setReplyBody}/>
                    }
                </div>
            }
        </>
    )
}

export default Post;