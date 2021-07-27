import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'

import '../components/assets/css/style.css'


export default function UpdateTransaction() {
    const [category, setCategory] = useState()
    const { transaction_id } = useParams()
    const { categories, transactions, dispatch } = useContext(stateContext)
    const [selectedTransaction, setSelectedTransaction] = useState({})
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const [errorMessage, setErrorMessage] = useState()
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    useEffect(() => {
        const selected_transaction = transactions.find(transaction => transaction.id == transaction_id) 
        setSelectedTransaction(selected_transaction)
    }, [transactions])


    const submit = async (event) => {
        event.preventDefault()
        const transaction = { description: description, date: date, amount: amount, category_id: Number(category) }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/transactions/${transaction_id}`, {
            method: "PUT",
            body: JSON.stringify(transaction),
            headers: {
                "Authorization": `Bearer ${cookies.token}`,
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (res.status === 200) {
            setDescription("")
            setDate("")
            setAmount("")
            dispatch({
                type: "updateTransactions",
                transaction: data
            })
        } else {
            setErrorMessage(data.error)
        }
    }
    
    const category_options = categories.map(category => 
        <option key={category.id} value={category.id}>
            {category.description}
        </option>
    )

    return (
        <>
            {
                selectedTransaction && 
                <div>
                    <h2>Current value</h2>
                    <p><strong>Type: </strong>{selectedTransaction.type}</p>
                    <p><strong>Category: </strong>{selectedTransaction.category}</p>
                    <p><strong>Description: </strong>{selectedTransaction.description}</p>
                    <p><strong>Date: </strong>{selectedTransaction.date}</p>
                    <p><strong>Amount: </strong>{selectedTransaction.amount}</p>
                </div>
            }
            
            <div>
                <h2>Update transaction</h2>
                {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
                <form className="transaction-form" onSubmit={submit}>
                    <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Category</option>
                        {category_options}
                    </select>
                    <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    <input type="date" value={date} name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
                    <input type="number" step="0.01" value={amount} name="amount" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                    <input type="submit" value="Update" id="submit-btn" />
                </form>
            </div>
        </>
    )
}