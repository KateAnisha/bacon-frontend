import { Link } from "react-router-dom"

// import '../components/assets/css/style.css';
// import '../components/assets/css/main.css';
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
                    <div className="btn-wrap">
                        <Link to="/login" className="main-btn">Login</Link>
                        <Link to="/register" className="main-btn">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Entrance
