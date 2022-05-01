import React, {useState, useEffect} from "react";
import {getUser, createPost, updateUser} from "../../api/apiHelper";
import {read_cookie, bake_cookie} from "sfcookies";
import Posts from "../post/Posts";
import PostForm from "../post/PostForm";
import EditProfile from "./EditProfile";

const ProfileComponent = ({destinationUser}) => {
    const [user, setUser] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [active, setActive] = useState("Posts");
    const [trigger, setTrigger] = useState(true);
    const [postBody, setPostBody] = useState("");
    
    const [editUser, setEditUser] = useState({});
    const availableTags = ['#dm', '#characters', '#maps', '#memes'];

    console.log(destinationUser);

    const defaultAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkw1WKC4E9OLSY7SOrahR3nTeGNaYbBblzNQ&usqp=CAU"
    const activeUser = destinationUser === undefined || read_cookie("profileId") === destinationUser;
    const id = activeUser ? read_cookie("userId") : destinationUser;

    console.log("profile: " + destinationUser + "  user: " + read_cookie("userId"));

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser(id);
            const users = await data;
            setUser({
                ...users[0],
                "dob": new Date(users[0].dob)
            });
            console.log(user);
        }
        fetchData();
    }, [destinationUser]);

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
    
    const handleSaveEdit = async () => {
        console.log(editUser);
        await updateUser(editUser.name,
            editUser.bio,
            editUser.avatar,
            editUser.dob.toISOString().split('T')[0],
            editUser.hometown, id
        );
        setUser(editUser);
        bake_cookie("userAvatar", editUser.avatar);
        console.log(user);
        setShowEdit(false);
        setTrigger(!trigger);
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
        {!showEdit && user &&
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
                            <span className={`profileDetail`}>@{user.username}</span>
                        </div>
                        {activeUser &&
                            <>
                                <div className={`profileHeaderUserName`}>
                                    <span
                                        className={`profileDetail`}>{user.dob ? "Birthday: " + user.dob.toDateString() : "date of birth not given"}</span>
                                </div>
                                <div className={`profileHeaderUserName`}>
                                    <span
                                        className={`profileDetail`}>{user.hometown != null ? "Hometown: " + user.hometown : "hometown not given"}</span>
                                </div>
                            </>
                        }
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