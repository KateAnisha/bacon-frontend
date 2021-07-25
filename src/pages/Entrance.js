import { Link } from "react-router-dom"

import '../components/assets/css/style.css';


const Entrance = () => {
    return (
        <div>
            <div className="right">
                <div className="welcome-btn">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>
            </div>
        </div>
    )
}

export default Entrance
