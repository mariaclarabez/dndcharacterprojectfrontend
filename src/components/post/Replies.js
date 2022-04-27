import React, {useState, useEffect} from "react";
import {getReplies} from '../../api/apiHelper';

const Reply = (
    {
        reply = {
            "id": 1,
            "userId": 1,
            "username": "kspice124",
            "avatar": "",
            "postId": 14,
            "body": "this is a reply"
        }
    }) => {
    return(
        <div className={`post`}>
            <img
                src={reply.avatar}
                className={`postAvatarImg`}/>
            <div>
                <div className={`username`}>{reply.username}</div>
                <div className={`body`}>{reply.body}</div>
            </div>
        </div>
    )
}


const Replies = ({parent = 1, refresh}) =>
{
    const [replies, setReplies] = useState([]);

    console.log(parent);
    useEffect(() => {
        const fetchData = async () => {
            const replies = await getReplies(parent);
            setReplies(await replies);
        }
        fetchData();
        console.log('refetch replies');
    }, [refresh]);

    return (
        <div>
            {replies.map(r => <Reply reply={r}/>)}
        </div>
    );
}

export default Replies;