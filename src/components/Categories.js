import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'


export default function Categories() {
    const history = useHistory()
    const [cookies] = useCookies(["token"])
    const { categories, transactions, dispatch } = useContext(stateContext)

    function redirectToForm(id) {
        history.push(`/categories/${id}`)
    }
    
    async function deleteCategory(deleted_category) {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/categories/${deleted_category.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${cookies.token}`
            }
        })
        if (res.status === 204) {
            const updated_categories = categories.filter(category => category.id !== deleted_category.id)
            const updated_transactions = transactions.filter(transaction => transaction.category !== deleted_category.description)
            dispatch({
                type: "setCategories",
                categories: updated_categories,
            })
            dispatch({
                type: "setTransactions",
                transactions: updated_transactions,
            })
        }
    }

    const income_categories = categories.filter(category => category.type === "Income").map(category => 
        <div key={category.id}>
            <p>{category.description}</p>
            <button onClick={() => redirectToForm(category.id)}>Edit</button>
            <button onClick={() => deleteCategory(category)}>Delete</button>
        </div>
    )

    const expense_categories = categories.filter(category => category.type === "Expense").map(category => 
        <div key={category.id}>
            <p>{category.description}</p>
            <button onClick={() => redirectToForm(category.id)}>Edit</button>
            <button onClick={() => deleteCategory(category)}>Delete</button>
        </div>
    )
    return (
        <div className="transaction-listing">
           <div>
               <h3>Income categories</h3>
               {income_categories}
           </div>
           <div>
           <h3>Expense categories</h3>
               {expense_categories}
           </div>
        </div>
    )
}
