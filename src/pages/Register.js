import React, { useState } from 'react';
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import appLogo from '../components/assets/images/Logo-final.svg'
import pigImg from '../components/assets/images/login-piggy.svg'
import '../components/assets/css/main.css';

export default function Register() {
    const history = useHistory()
    const [cookies, setCookie] = useCookies(['token'])
    const { dispatch } = useContext(stateContext)
    const [errorMessage, setErrorMessage] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const submit = async (event) => {
        event.preventDefault()
        const user = { name, email, password }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/me`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (res.status === 201) {
            setCookie('token', data.token, { path: '/' })
            dispatch({
                type: "setToken",
                token: data.token
            })
            setName("")
            setEmail("")
            setPassword("")
            setPasswordConfirm("")
            history.push("/home")
        } else {
        setErrorMessage(data.error)
        }
    }

    return (
        <div className="wrapper">
            <img src={pigImg} alt="Piggybank Icon" className="pig-img"/>
            <div className="left">
                <img src={appLogo} alt="Application Logo" className="app-logo"/>
            </div>
            <div className="right">
                {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
                <form className="" onSubmit={submit}>
                    <input type="text" value={name} name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" value={passwordConfirm} name="passwordConfirm" placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <input type="submit" value="Register" id="submit-btn" />
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link> now</p>
            </div>
        </div>
    )
}