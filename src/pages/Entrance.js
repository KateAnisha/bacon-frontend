import { Link } from "react-router-dom"

import '../components/assets/css/main.css';
import appLogo from '../components/assets/images/Logo-final.svg'
import pigImg from '../components/assets/images/login-piggy.svg'



export default function Entrance() {
    return (
        <div className="wrapper">
            <div className="left">
                <img src={pigImg} alt="Piggybank Icon" className="pig-img"/>
                <img src={appLogo} alt="Application Logo" className="app-logo" id="main-logo"/>
            </div>
            <div className="right">
                <div className="btn-wrap">
                    <Link to="/login" className="welcome-btn">Login</Link>
                    <Link to="/register" className="welcome-btn">Register</Link>
                </div>
            </div>
        </div>
    )
}
