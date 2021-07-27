import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useHistory } from 'react-router-dom'



export default function UpdatePassword() {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [cookies, setCookie] = useCookies(['token'])
    const { dispatch } = useContext(stateContext)
    const [errorMessage, setErrorMessage] = useState()


    const submit = async (event) => {
        event.preventDefault()
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
            history.push('/home')
        } else {
            setErrorMessage(data.error)
        }
    }

    return (
        <div>
            <h2>Update name</h2>
        <form onSubmit={submit}>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" value={passwordConfirm} placeholder="Password Confirm" onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <input type="submit" value="Update" id="submit-btn" />
        </form>
        </div>
    )
}