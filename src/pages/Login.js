import { useState } from "react"
import '../components/assets/css/main.css';


export default function Login({setCookie, setIsLoggedIn}) {
    const [errorMessage, setErrorMessage] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
            setCookie("token", data.token, {
                path: "/"
            })
            setIsLoggedIn(true)
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