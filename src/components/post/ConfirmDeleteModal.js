import React from "react";

const ConfirmDeleteModal = ({onSave, onCancel}) => {

    return(
        <div className={'loginModal'}>
            <div>
                Are you sure you want to delete this post?
            </div>
            <button onClick={onSave}>Yes, I'm Sure</button>
            <button onClick={onCancel}>No, Nevermind</button>
        </div>
    )
}

export default ConfirmDeleteModal;