import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Register from './Register'
import Login from './Login'
import Entrance from './Entrance'
// import '../components/assets/css/style.css';
// import '../components/assets/css/main.css';
// import { Link } from 'react-router-dom'
import appLogo from '../components/assets/images/Logo-final.svg'
// import cityBg from '../components/assets/city-bg.svg'
import pigImg from '../components/assets/images/login-piggy.svg'

export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <img src={pigImg} alt="Piggybank Icon" className="pig-img"/>
                <div className="left">
                    <img src={appLogo} alt="Application Logo" className="app-logo"/>
                </div>

                <Router>
                    <Switch>
                        <Route exact path="/entrance" component={Entrance} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Router>
            </div>
        </>
    )
}