import React, {useState, useEffect} from "react";
import AvatarModal from "./AvatarModal";
import DatePicker from "react-datepicker";

const EditProfile = ({onSave, onCancel, user, setUser}) => {
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const handleEditAvatar = () => {
        setShowAvatarModal(true);
    }

    const handleSaveAvatar = (avatar) => {
        setUser({
            ...user,
            "avatar": avatar
        });
        setShowAvatarModal(false);
    }

    const handleCancelAvatar = () => {
        setShowAvatarModal(false);
    }
    
    const handleDateChange = (e) => {
        setUser({
            ...user,
            dob: e
        });
    };

    const handleHometownChange = (e) => {
        setUser({
            ...user,
            "hometown": e.target.value
        });
    };

    const handleNameChange = (event) => {
        setUser({
            ...user,
            "name": event.target.value
        });
    };

    const handleBioChange = (event) => {
        setUser({
            ...user,
            "bio": event.target.value
        });
    };

    return (
        <>
            {showAvatarModal &&
                <AvatarModal avatar={user.avatar} onSave={handleSaveAvatar} onCancel={handleCancelAvatar}/>
            }
            <div className={`profileHeader`}>
                <div className={'avatarContainer'}>
                    <img
                        src={user.avatar}
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
                    <div className={`profileHeaderUserName`}>
                        Birthday:
                        <DatePicker selected={user.dob} onChange={handleDateChange}/>
                    </div>
                    <div className={`profileHeaderUserName`}>
                        Hometown:
                        <input id={"hometown"} value={user.hometown} onChange={handleHometownChange}/>
                    </div>
                    <hr/>
                    <div className={`profileBio`}>
                        Bio: <textarea id={"bio"} value={user.bio} onChange={handleBioChange}/>
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