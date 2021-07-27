import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useHistory } from 'react-router-dom'


export default function UpdateName() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [cookies, setCookie] = useCookies(['token'])
    const { dispatch } = useContext(stateContext)
    const [errorMessage, setErrorMessage] = useState()


    const submit = async (event) => {
        event.preventDefault()
        const user = { name }
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
            setName("")
            dispatch({
                type: "setName",
                name: data.name
            })
            history.push('/home')
        } else {
            setErrorMessage(data.error)
        }
    }

    return (
        <div>
            <h2>Update name</h2>
        <form onSubmit={submit}>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Update" id="submit-btn" />
        </form>
        </div>
    )
}