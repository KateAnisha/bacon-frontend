import React from 'react'
import '../components/assets/css/style.css';
// import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <>
            <h1>Login/register page</h1>
            <div className="welcome-btn">
                <a href="/login">
                    <button>Login</button>
                </a>
                <a href="register">
                    <button>Register</button>
                </a>
            </div>
        </>
    )
}

export default Welcome;
