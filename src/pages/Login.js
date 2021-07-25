import { useState } from "react"
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

import '../components/assets/css/main.css';


export default function Login({cookies, setTokenCookie, setUserIdCookie}) {
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
            setTokenCookie(data.token)
            setUserIdCookie(data.user_id)
            dispatch({
                type: "setToken",
                token: data.token
            })
            dispatch({
                type: "setUserId",
                user_id: data.user_id
            })
       } else {
            setErrorMessage(data.error)
       }
        
    }

    return (
        <>
            <h1>Login</h1>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit} className="main-form">
                
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                
                <button type="submit">Login</button>
                <p>Don't have an account? Register now</p>
            </form>

        </>
    )
}