import { Link } from "react-router-dom"

import '../components/assets/css/style.css';
import appLogo from '../components/assets/images/Logo-final.svg'
import pigImg from '../components/assets/images/login-piggy.svg'




const Entrance = () => {
    return (
        <>
            <div className="wrapper">
                <img src={pigImg} alt="Piggybank Icon" className="pig-img"/>
                <div className="left">
                    <img src={appLogo} alt="Application Logo" className="app-logo"/>
                </div>
                <div className="right">
                    <div className="welcome-btn">
                        <Link to="/login">LOGIN</Link>
                        <Link to="/register">REGISTER</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Entrance
