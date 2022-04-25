import React from "react";

const Post = ({
    data = {
        "username": "dragonLady83",
        "avatar": "https://images-na.ssl-images-amazon.com/images/I/51z8u+zkNUL.jpg",
        "body": "fun fact- dragons don't always breathe fire",
        "stats": {
            "likes": 0,
            "replies": 0,
            "shares": 0
        }
    }
}) => {
    return(
        <div className={`post`}>
            <img
                src={data.avatar}
                className={`postAvatarImg`}/>
            <div>
                <div className={`username`}>{data.username}</div>
                <div className={`body`}>{data.body}</div>
                <div className={`stats`}>
                    <span>
                        <i className={`fas fa-heart stat`}/>
                        {data.stats.likes}
                    </span>
                    <span>
                        <i className={`fas fa-comment stat`}/>
                        {data.stats.replies}
                    </span>
                    <span>
                        <i className={`fas fa-share stat`}/>
                        {data.stats.shares}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;