import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'


function Transactions({type}) {
    const [cookies] = useCookies(["token"])
    const { transactions, dispatch } = useContext(stateContext)
    
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

    const filtered_transactions = transactions.filter(transaction => transaction.type === type).map(transaction => 
        <div key={transaction.id} className="transaction-listing">
            <div className="tr">
                <div className="show-transactions"> 
                    <p>{transaction.category}</p>
                </div>
                <div className="show-transactions"> <p>{transaction.description}</p></div>
                <div className="show-transactions"> <p>{transaction.date}</p></div>
                <div className="show-transactions"> <p>${transaction.amount}</p></div>
                <div className="show-transactions"> <button className="transaction-btn">Edit</button></div>
                <div className="show-transactions"> <button  className="transaction-btn" onClick={() => deleteTransaction(transaction.id)}>Delete</button></div>
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
