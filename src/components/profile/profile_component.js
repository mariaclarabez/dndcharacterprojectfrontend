import React, {useState, useEffect} from "react";
import {getUser, createPost, updateUser} from "../../api/apiHelper";
import {read_cookie} from "sfcookies";
import Posts from "../post/Posts";
import PostForm from "../post/PostForm";
import EditProfile from "./EditProfile";

const ProfileComponent = () => {
    const [user, setUser] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [active, setActive] = useState("Posts");
    const [trigger, setTrigger] = useState(true);
    const [postBody, setPostBody] = useState("");
    
    const [editUser, setEditUser] = useState({});
    const availableTags = ['#dm', '#characters', '#maps', '#memes'];

    const defaultAvatar = "https://ih1.redbubble.net/image.783510818.4628/st,small,845x845-pad,1000x1000,f8f8f8.u8.jpg";
    const activeUser = read_cookie("profileId") === "" || read_cookie("profileId") === read_cookie("userId");
    const id = activeUser ? read_cookie("userId") : read_cookie("profileId");

    console.log("profile: " + read_cookie("profileId") + "  user: " + read_cookie("userId"));

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser(id);
            const users = await data
            setUser(users[0]);
            console.log(user);
        }
        fetchData();
    }, []);

    const handleCreate = async () => {
        console.log(postBody);
        const regex = /#[^ ]+/g
        const tags = postBody.match(regex);
        var validTags = tags != undefined ? tags.filter(t => availableTags.includes(t)) : [];
        validTags = validTags.join(";");
        const post = {
            "userId": id,
            "body": postBody,
            "tags": validTags
        }

        console.log(post);
        const response = await createPost(post.userId, post.body, post.tags);
        setTrigger(!trigger);
    };

    const handleSelect = (event) => {
        setActive(event.target.id);
    }
    
    const handleSaveEdit = () => {
        setUser(editUser);
        updateUser(user.name, user.bio, user.avatar, id);
        setShowEdit(false);
    }
    
    const handleCancelEdit = () => {
        setEditUser({});
        setShowEdit(false);
    }
    
    const handleEditClick = () => {
        setEditUser(user);
        setShowEdit(true);
    }

    return (
        <>
        {showEdit &&
            <EditProfile user={editUser} setUser={setEditUser} onSave={handleSaveEdit} onCancel={handleCancelEdit}/>
        }
        {!showEdit &&
            <>
                <div className={`profileHeader`}>
                    <img
                        src={user.avatar ? `${user.avatar}` : `${defaultAvatar}`}
                        className={`profileAvatar`}/>
                    <div className={`profileData`}>
                        <div className={`profileHeaderName`}>
                            {user.name}
                        </div>
                        <div className={`profileHeaderUserName`}>
                            @{user.username}
                        </div>
                        <hr/>
                        <div className={`profileBio`}>
                            {user.bio}
                        </div>
                    </div>
                    {activeUser &&
                        <i className={`fas fa-pen editButton`}
                           onClick={handleEditClick}/>
                    }

                </div>

                <div className={`profileBody`}>
                    <ul className={`nav mb-2 nav-tabs `}>
                        <ul className={`nav nav-tabs flex-nowrap profile-tabs wd-text-no-wrap`}>
                            <li className="nav-item profileNavItem">
                                <p id={`Posts`} className={`nav-link tab ${"Posts" === active ? "active" : ""}`}
                                   onClick={handleSelect}>{`Posts`}</p>
                            </li>
                            <li className="nav-item profileNavItem">
                                <p id={`Characters`} className={`nav-link tab ${"Characters" === active ? "active" : ""}`}
                                   onClick={handleSelect}>{`Characters`}</p>
                            </li>
                        </ul>
                    </ul>
                    {active === "Posts" && activeUser &&
                        <PostForm onPost={handleCreate} setBody={setPostBody}/>
                    }
                    {active === "Posts" &&
                        <Posts id={id} triggerReload={trigger}/>
                    }
                </div>
            </>
        }
        </>
    )
}

export default ProfileComponent;