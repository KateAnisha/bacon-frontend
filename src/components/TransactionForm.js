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
    const shadowStyle = {
        boxShadow: "none"
    }

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
            setErrorMessage("")
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
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit}>
                <div id="transaction-form-category">
                    <label id="label-category" className="text-black-50" for="category">Category: </label>
                    <select 
                        id="field-category"
                        name="category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className=""
                        style={shadowStyle}
                    >
                        <option>Category</option>
                        {filtered_categories}
                    </select>
                </div>
                <div id="transaction-form-description">
                    <label id="label-description" className="text-black-50" for="description">Description: </label>
                    <input 
                        id="field-description"
                        type="text" 
                        value={description} 
                        name="description" 
                        placeholder="Description" 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </div>
                <div id="transaction-form-date">
                    <label id="label-date" className="text-black-50" for="date">Date: </label>
                    <input 
                        id="field-date"
                        type="date" 
                        value={date} 
                        name="date" 
                        placeholder="Date" 
                        onChange={(e) => setDate(e.target.value)} 
                    />
                </div>
                <div id="transaction-form-amount">
                    <label id="label-amount" className="text-black-50" for="amount">Amount: </label>
                    <input
                        id="field-amount"
                        type="number" 
                        step="0.01" 
                        value={amount} 
                        name="amount" 
                        placeholder="Amount" 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <input 
                    type="submit" 
                    value="Add transaction" 
                    id="transaction-form-submit-btn" 
                />
            </form>
        </>
    )

}


