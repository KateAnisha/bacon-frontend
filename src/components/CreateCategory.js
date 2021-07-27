import React, { useState } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'

import '../components/assets/css/style.css';


export default function CreateCategory() {
    const [errorMessage, setErrorMessage] = useState()
    const [cookies] = useCookies(['token'])
    const [description, setDescription] = useState("")
    const [type, setType] = useState()
    const { categories, dispatch } = useContext(stateContext)

    const submit = async (event) => {
        event.preventDefault()
        if (categories.find(category => category.type === type && category.description === description) === undefined) {
            const cateogry = { description: description, category_type: type }
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/categories`, {
                method: "POST",
                body: JSON.stringify(cateogry),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookies.token}`
                }
            })
            const data = await res.json()
            if (res.status === 201) {
                dispatch({
                    type: "addCategory",
                    data
                })
                setDescription("")
                setType("")
            } else {
            setErrorMessage(data.error)
            }
        } else {
            setErrorMessage("Category already exists")
        }
    }

    return (
        <>
            <h2>Create category</h2>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form className="transaction-form" onSubmit={submit}>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Create" id="submit-btn" />
            </form>
        </>
    )
}


