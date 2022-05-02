import './home.css';
import dragon from "../images/dragon-2.png"
import {Link, useNavigate} from "react-router-dom";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal"
import { React, useState } from "react";
import {registerUser, loginUser} from '../../api/apiHelper'
import {bake_cookie} from "sfcookies";


function HomeView(){

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');

    const navigate = useNavigate();

    async function onUpdateRegister(username, password, role) {
        console.log("attempting to register")
        setShowRegister(false);
        await registerUser(username, password, role);
        
    }

    const login = () => {
        setShowLogin(true);
    };

    const register = () => {
        setShowRegister(true);

    };
    async function onUpdateLogin() {
        console.log("Attempting to login");
        setShowLogin(false);
    
    }

    const onCancelLogin = () => {
        setShowLogin(false);
    }

    const onCancelRegister = () => {
        setShowRegister(false);
    }

    const continueAsGuest = () => {
        navigate("/");
    }

    bake_cookie("userId", "");
    bake_cookie("userAvatar", "");
    bake_cookie("userRole", "anon");

    return (
        <>
        <div className="background body">
            <img className="background-image" src="city.jpg"></img>
            <div className="dragon-div">
            <img className="dragon-img" src={dragon}></img></div>
  
        <div className="title">
            Dungeons and Dragons Forum
        </div>

        <LoginModal show={showLogin} onUpdateLogin={onUpdateLogin} onCancel={onCancelLogin}/>

        <button className="login-button" onClick={login}>Log In</button>

        <RegisterModal show={showRegister} onUpdateRegister={onUpdateRegister} onCancel={onCancelRegister}/>

        <button className="register-button" onClick={register}>Register</button>

        <button className={'continue-as-guest-button'} onClick={continueAsGuest}>Continue as Guest</button>


        </div>
        

        </>
    )
}
export default HomeView;