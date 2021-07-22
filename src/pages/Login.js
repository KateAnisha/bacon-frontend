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
            
            <h1>Login pageeeee</h1>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit}>
                <div>
                    <label>Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}