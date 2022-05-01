import React from "react";
import {useNavigate} from "react-router-dom";


const PromptLoginModal = ({onCancel}) => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }
    
    return(
        <div className={'loginModal'}>
            <div>
                <i className={`fas fa-times cancelButton`} onClick={onCancel}/>
                <p>Oh No!  It looks like you're not logged in!</p>
                <p>Log in or create an account to have access to more features including:</p>
                <ul>
                    <li>
                        Posting content
                    </li>
                    <li>
                        Interacting with posts
                    </li>
                    <li>
                        Create new characters
                    </li>
                    <li>
                        Have your very own profile
                    </li>
                </ul>
                <button onClick={handleLogin}>Log in or register</button>
            </div>
        </div>
    )
}

export default PromptLoginModal;