import { useState } from "react"
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"

import '../components/assets/css/main.css';


export default function Login() {
    const history = useHistory()
    const [cookies, setCookie] = useCookies(['token'])
    const [errorMessage, setErrorMessage] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { dispatch } = useContext(stateContext)

    const submit = async (event) => {
        event.preventDefault()
        const user = { email, password }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
       if (res.status === 201) {
            setCookie('token', data.token, { path: '/' } )
            // setTokenCookie(data.token)
            dispatch({
                type: "setToken",
                token: data.token
            })
            history.push("/")
       } else {
            setErrorMessage(data.error)
       }
        
    }

    return (
        <div className="right">
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit} className="main-form">
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link> now</p>
            </form>
        </div> 
    )
}