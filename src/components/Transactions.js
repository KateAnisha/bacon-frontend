import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'



function Transactions({type, limit}) {
    const history = useHistory()
    const [cookies] = useCookies(["token"])
    const { transactions, dispatch } = useContext(stateContext)

    async function updateTransaction(id) {
        // event.preventDefault()
        // const transaction = { description: description, amount: amount, date: date, category_id: category }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/transactions/${id}`, {
            method: "PUT",
            // body: JSON.stringify(transaction),
            headers: {
                "Authorization": `Bearer ${cookies.token}`,
                "Content-Type": "application/json"
            }
        })
        const data = res.json()
        if (res.status === 200) {
            const updated_transaction_index = transactions.findIndex(transaction => transaction.id === id)
            transactions[updated_transaction_index] = data 
            dispatch({
              type: "setTransactions",
              transactions: transactions,
            })
        }
    }
    
    async function deleteTransaction(id) {
        // console.log(cookies.token)
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/transactions/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${cookies.token}`
            }
        })
        const updated_transactions = transactions.filter(transaction => transaction.id !== id)
        if (res.status === 204) {
            dispatch({
              type: "setTransactions",
              transactions: updated_transactions,
            })
        }
    }

    function redirectToForm(id) {
        history.push(`/transactions/${id}`)
    }
    
    const filtered_transactions = transactions.filter(transaction => transaction.type === type).slice(0, limit).map(transaction => 
        <div key={transaction.id} className="transaction-listing">
            <div className="tr">
                <div className="show-transactions">
                    <p>{transaction.category}</p>
                </div>
                <div className="show-transactions">
                    <p>{transaction.description}</p>
                </div>
                <div className="show-transactions">
                    <p>{transaction.date}</p>
                </div>
                <div className="show-transactions">
                    <p>${transaction.amount}</p>
                </div>
                <div className="show-transactions">
                    <button onClick={() => redirectToForm(transaction.id)}>Edit</button>
                    <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                </div>
               
            </div>
        </div>
    )
    return (
        <div className="transaction-listing">
           {filtered_transactions}
        </div>
    )
}

export default Transactions;
