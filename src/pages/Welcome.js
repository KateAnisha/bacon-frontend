import React from 'react'
import '../components/assets/css/style.css';
import '../components/assets/css/main.css';
// import { Link } from 'react-router-dom'
import appLogo from '../components/assets/images/Logo-final.svg'
// import cityBg from '../components/assets/city-bg.svg'
import pigImg from '../components/assets/images/login-piggy.svg'

function Welcome() {
    return (
        <>
            <div className="wrapper">
                <img src={pigImg} alt="Piggybank Icon" className="pig-img"/>
                <div className="left">
                    <img src={appLogo} alt="Application Logo" className="app-logo"/>
                </div>
                <div className="right">
                    <div className="welcome-btn">
                        <a href="/login">
                            <button>Login</button>
                        </a>
                        <a href="register">
                            <button>Register</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;
