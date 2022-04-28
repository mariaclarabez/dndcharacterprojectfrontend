import React, {useState} from "react";

const EditProfile = ({onSave, onCancel, user, setUser}) => {
    const defaultAvatar = "https://ih1.redbubble.net/image.783510818.4628/st,small,845x845-pad,1000x1000,f8f8f8.u8.jpg";

    const avatarChoices = [
        "https://assets.dragoart.com/images/22997_501/how-to-draw-a-kawaii-dragon_5e4ce7b4b05903.68659705_117628_5_3.png",
        "https://image.shutterstock.com/z/stock-vector-halloween-character-collection-kawaii-witch-1524775391.jpg",
        "https://media.istockphoto.com/vectors/kawaii-wizard-vector-id1173574673",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/404b8564-546d-4dc9-b980-4fa4b15a01e0/d8uaaiv-61f309a3-2b78-4d55-8708-f3bf076d173f.jpg/v1/fill/w_1024,h_1024,q_75,strp/kawaii_dinosaur_by_peppermint_pop_uk_d8uaaiv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwNGI4NTY0LTU0NmQtNGRjOS1iOTgwLTRmYTRiMTVhMDFlMFwvZDh1YWFpdi02MWYzMDlhMy0yYjc4LTRkNTUtODcwOC1mM2JmMDc2ZDE3M2YuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDA0Yjg1NjQtNTQ2ZC00ZGM5LWI5ODAtNGZhNGIxNWEwMWUwXC9wZXBwZXJtaW50LXBvcC11ay00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.oJimc-1AwCf2tngFeUdnQhY5Svhhu9E_pdM7JONDfoM",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYeORxbFLJrfcse4FOIMWx5IzvbQHEb7sfw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7kVzWVDpUN_k_WFh53bgbbN73SWTQvelfGZX3GRlXIGDfwZfMG6Av0BuaSjxWy52tA0&usqp=CAU"
    ]

    const handleEditAvatar = () => {

    }

    const handleNameChange = (event) => {
        setUser({
            ...user,
            "name": event.target.value
        });
    }

    const handleBioChange = (event) => {
        setUser({
            ...user,
            "bio": event.target.value
        });
    }

    return (
        <>
            <div className={`profileHeader`}>
                <div className={'avatarContainer'}>
                    <img
                        src={user.avatar ? `${user.avatar}` : `${defaultAvatar}`}
                        className={`editProfileAvatar`}
                        onClick={handleEditAvatar}/>
                    <i className={`fas fa-camera editAvatar`}/>
                </div>
                <div className={`profileData`}>
                    <div className={`profileHeaderName`}>
                        <input id={"name"} value={user.name} onChange={handleNameChange}/>
                    </div>
                    <div className={`profileHeaderUserName`}>
                        @{user.username}
                    </div>
                    <hr/>
                    <div className={`profileBio`}>
                        <textarea id={"bio"} value={user.bio} onChange={handleBioChange}/>
                    </div>
                </div>
                <i className={`fas fa-times editButton`}
                   onClick={onCancel}/>
                <i className={`fas fa-check editButton`}
                   onClick={onSave}/>
            </div>
        </>
    )
}

export default EditProfile;