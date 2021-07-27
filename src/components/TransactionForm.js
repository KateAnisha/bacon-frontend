import React, { useState } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'

import '../components/assets/css/style.css';


export default function TransactionForm({type}) {
    const [errorMessage, setErrorMessage] = useState()
    const [cookies] = useCookies(['token'])
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState()
    const [date, setDate] = useState("")
    const [category, setCategory] = useState()
    const { categories, dispatch } = useContext(stateContext)

    const submit = async (event) => {
        event.preventDefault()
        const transaction = { description: description, amount: amount, date: date, category_id: category }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/transactions`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookies.token}`
            }
        })
        const data = await res.json()
        
        if (res.status === 201) {
            dispatch({
                type: "addTransaction",
                data
            })
            setDescription("")
            setAmount("")
            setCategory("")
            setDate("")
        } else {
            setErrorMessage(data.error)
        }
    }
   
    const filtered_categories = categories.filter(category => category.type === type).map(category => 
        <option key={category.id} value={category.id}>
            {category.description}
        </option>
    )

    return (
        <>
            <h2>{type}</h2>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form className="transaction-form" onSubmit={submit}>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Category</option>
                    {filtered_categories}
                </select>
                <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="date" value={date} name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
                <input type="number" step="0.01" value={amount} name="amount" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                <input type="submit" value="Add transaction" id="submit-btn" />
            </form>
        </>
    )

}


