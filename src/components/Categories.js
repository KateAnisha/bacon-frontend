import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import CategoryForm from './CategoryForm'


export default function Categories() {
    const [cookies] = useCookies(["token"])
    const { categories, transactions, dispatch } = useContext(stateContext)

    // async function updateTransaction(id) {
    //     // event.preventDefault()
    //     // const transaction = { description: description, amount: amount, date: date, category_id: category }
    //     const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/transactions/${id}`, {
    //         method: "PUT",
    //         // body: JSON.stringify(transaction),
    //         headers: {
    //             "Authorization": `Bearer ${cookies.token}`,
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     const data = res.json()
    //     if (res.status === 200) {
    //         const updated_transaction_index = transactions.findIndex(transaction => transaction.id === id)
    //         transactions[updated_transaction_index] = data 
    //         dispatch({
    //           type: "setTransactions",
    //           transactions: transactions,
    //         })
    //     }
    // }
    
    async function deleteCategory(deleted_category) {
        // console.log(cookies.token)
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

    const income_categories = categories.filter(category => category.type === "income").map(category => 
        <div key={category.id}>
            <p>{category.description}</p>
            <button>Update</button>
            <button onClick={() => deleteCategory(category)}>Delete</button>
        </div>
    )

    const expense_categories = categories.filter(category => category.type === "expense").map(category => 
        <div key={category.id}>
            <p>{category.description}</p>
            <button>Update</button>
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
           <CategoryForm />
        </div>
    )
}
