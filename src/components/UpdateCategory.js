import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'

import '../components/assets/css/style.css'


export default function UpdateCategory() {
    const { category_id } = useParams()
    const { categories, dispatch } = useContext(stateContext)
    const [selectedCategory, setSelectedCategory] = useState({})
    const [cookies, setCookie] = useCookies(['token'])
    const [errorMessage, setErrorMessage] = useState()
    const [description, setDescription] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        const selected_category = categories.find(category => category.id == category_id) 
        setSelectedCategory(selected_category)
    }, [categories])


    const submit = async (event) => {
        event.preventDefault()
        if (categories.find(category => category.type === type && category.description === description) === undefined) {
            const cateogry = { description: description, category_type: type }
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/categories/${category_id}`, {
                method: "PUT",
                body: JSON.stringify(cateogry),
                headers: {
                    "Authorization": `Bearer ${cookies.token}`,
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.status === 200) {
                setDescription("")
                setType("")
                dispatch({
                    type: "updateCategories",
                    category: data
                })
            } else {
                setErrorMessage(data.error)
            }
        } else {
            setErrorMessage("Category already exists")
        }
    }


    return (
        <>
            <div>
                <h2>Current value</h2>
                <p><strong>Type: </strong>{selectedCategory ? selectedCategory.type : ''}</p>
                <p><strong>Description: </strong>{selectedCategory ? selectedCategory.description : ''}</p>
            </div>
            <div>
                <h2>Update category</h2>
                {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
                <form className="transaction-form" onSubmit={submit}>
                    <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <br />
                    <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <input type="submit" value="Update" id="submit-btn" />
                </form>
            </div>
           
        </>
    )
}