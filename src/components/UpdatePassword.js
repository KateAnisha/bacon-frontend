import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'


export default function UpdatePassword() {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [cookies, setCookie] = useCookies(['token'])
    const [errorMessage, setErrorMessage] = useState()

    const submit = async (event) => {
        event.preventDefault()
        if (password === passwordConfirm) {
            const user = { password }
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/me`, {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Authorization": `Bearer ${cookies.token}`,
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.status === 200) {
                setPassword("")
                setPasswordConfirm("")
                history.push('/')
            } else {
                setErrorMessage(data.error)
            }
        } else {
            setErrorMessage("Passwords must match")
        }
        
    }

    return (
        <div>
            <h2>Update password</h2>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit}>
                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" value={passwordConfirm} placeholder="Password Confirm" onChange={(e) => setPasswordConfirm(e.target.value)}/>
                <input type="submit" value="Update" id="submit-btn" />
            </form>
        </div>
    )
}