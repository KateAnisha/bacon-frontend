import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'


export default function Transactions({type, limit}) {
    const history = useHistory()
    const [cookies] = useCookies(["token"])
    const { transactions, dispatch } = useContext(stateContext)
    
    async function deleteTransaction(id) {
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
        <div key={transaction.id} className="transaction">
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
        <div className="transaciton-list">
            <div className="transaction">
                <div className="tr">
                    <h4 className="show-transactions">Category</h4>
                    <h4 className="show-transactions">Description</h4>
                    <h4 className="show-transactions">Date</h4>
                    <h4 className="show-transactions">Amount</h4>
                    <h4 className="show-transactions">Action</h4>
                </div>   
            </div>
            {filtered_transactions}
        </div>
    )
}


