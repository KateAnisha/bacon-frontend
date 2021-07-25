import React, { useState } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'

import '../components/assets/css/style.css';

export default function BudgetForm() {
    const { budget, dispatch } = useContext(stateContext)
    const [updatedBudget, setUpdatedBudget] = useState()
    const [cookies] = useCookies(['token'])

    const submit = async (event) => {
        event.preventDefault()
        const budget = { amount: updatedBudget}
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/budget`, {
            method: "PUT",
            body: JSON.stringify(budget),
            headers: {
                "Authorization": `Bearer ${cookies.token}`,
                "Content-Type": "application/json"
            }
        })
        const data = res.json()
        if (res.status === 200) {
            dispatch({
              type: "setBudget",
              budget: updatedBudget,
            })
            setUpdatedBudget("")
        }
    }

    return (
        <form className="transaction-form" onSubmit={submit}>
            <input type="number" step="0.01" value={updatedBudget} name="budget" placeholder="Budget" onChange={(e) => setUpdatedBudget(e.target.value)} />
            <input type="submit" value="Add transaction" id="submit-btn" />
        </form>
    )
}