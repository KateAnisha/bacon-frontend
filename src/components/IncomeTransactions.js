import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import TransactionItem from './TransactionItem'

function IncomeTransactions() {
    const { transactions } = useContext(stateContext)
    console.log(transactions)
    // const removeTransaction = i => {
    //     let temp = income.filter((v, index) => index != i);
    //     setIncome(temp);
    // }
    // const sortByDate = (a, b) => {
    //     return a.date - b.date;
        
    // }
    const income_transactions = transactions.filter(transaction => transaction.type == "income").map(transaction => 
        <div key={transaction.id}>
            <p>{transaction.category}</p>
            <p>{transaction.description}</p>
            <p>{transaction.date}</p>
            <p>${transaction.amount}</p>
        </div>
    )
    return (
        <div className="transaction-listing">
           {income_transactions}
        </div>
    )
}

export default IncomeTransactions;
