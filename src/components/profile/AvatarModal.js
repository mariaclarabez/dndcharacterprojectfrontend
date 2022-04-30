import React, { useState} from "react";

const avatarOptions = [
    {
        "id": 1,
        "avatar": "https://assets.dragoart.com/images/22997_501/how-to-draw-a-kawaii-dragon_5e4ce7b4b05903.68659705_117628_5_3.png"
    },
    {
        "id": 2,
        "avatar": "https://image.shutterstock.com/z/stock-vector-halloween-character-collection-kawaii-witch-1524775391.jpg"
    },
    {
        "id": 3,
        "avatar": "https://media.istockphoto.com/vectors/kawaii-wizard-vector-id1173574673"
    },
    {
        "id": 4,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYeORxbFLJrfcse4FOIMWx5IzvbQHEb7sfw&usqp=CAU"
    },
    {
        "id": 5,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7kVzWVDpUN_k_WFh53bgbbN73SWTQvelfGZX3GRlXIGDfwZfMG6Av0BuaSjxWy52tA0&usqp=CAU"
    },
    {
        "id": 6,
        "avatar": "https://ih1.redbubble.net/image.783510818.4628/st,small,845x845-pad,1000x1000,f8f8f8.u8.jpg"
    }
];

const AvatarModal = ({avatar, onSave, onCancel}) => {
    const [chosen, setChosen] = useState(avatar);

    const handleSelect = (e) => {
        const picked = e.target.getAttribute('src');
        setChosen(picked);
    }
    
    const handleSave = () => {
        onSave(chosen);
    }
    
    const handleCancel = () => {
        onCancel();
    }

    return (
        <div className={'avatarModal'}>
            <div>
                <div>
                    <img
                        src={avatarOptions[0].avatar}
                        value={avatarOptions[0].id}
                        className={`avatarOption ${chosen === avatarOptions[0].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                    <img
                        src={avatarOptions[1].avatar}
                        id={avatarOptions[1].id}
                        className={`avatarOption ${chosen === avatarOptions[1].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                    <img
                        src={avatarOptions[2].avatar}
                        id={avatarOptions[2].id}
                        className={`avatarOption ${chosen === avatarOptions[2].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                    <br/>
                    <img
                        src={avatarOptions[3].avatar}
                        id={avatarOptions[3].id}
                        className={`avatarOption ${chosen === avatarOptions[3].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                    <img
                        src={avatarOptions[4].avatar}
                        id={avatarOptions[4].id}
                        className={`avatarOption ${chosen === avatarOptions[4].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                    <img
                        src={avatarOptions[5].avatar}
                        id={avatarOptions[5].id}
                        className={`avatarOption ${chosen === avatarOptions[5].avatar ? 'selectedAvatar' : ''}`}
                        onClick={handleSelect}/>
                </div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AvatarModal;