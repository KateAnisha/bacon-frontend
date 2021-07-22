import {useState} from "react";


export default function Login(props) {
    const [errorMessage, setErrorMessage] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (event) => {
        event.preventDefault()
        
    }

    return (
        <>
            <h1>Login</h1>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit}>
                <div>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? Register now</p>
            </form>
        </>
    )
}