import { useState, useEffect } from "react"

const Transactions = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}users/1/income_transactions/`)
        const data = await response.json()
        setTransactions(data)
    }, [transactions])

    const income_transactions = transactions.map(transaction => <p key={transaction.id}>{transaction.category} - {transaction.description}</p>)

    return (
        <div>
            <h1>hi</h1>
            {income_transactions}
        </div>
    )
}

export default Transactions
