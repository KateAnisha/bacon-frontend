import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory, Link } from 'react-router-dom'


export default function Transactions({type, limit}) {
    const linkStyle = {
        textDecoration: 'none', 
        color: '#7c7c7c',
    }
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
        <tr key={transaction.id}>
            <td id="transaction-category">{transaction.category}</td>
            <td id="transaction-description">{transaction.description}</td>
            <td>{transaction.date}</td>
            <td id="transaction-amount" className="text-end">${transaction.amount}</td>
            <td id="transaction-action" className="text-center">
                <Link style={linkStyle} onClick={() => redirectToForm(transaction.id)}>Edit</Link>
                <span> | </span> 
                <Link style={linkStyle} onClick={() => deleteTransaction(transaction.id)}>Delete</Link>
            </td>
        </tr>
    )
    return (
        <table id="transactions">
            <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
                <th class="text-end">Amount</th>
                <th class="text-center">Action</th>
            </tr>
            {filtered_transactions}
        </table>
    )
}


