import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'

import '../components/assets/css/transactions.css'

function Expenses() {
    return ( 
        <>
            <div className="expenses-page">
                <div className="display-transactions" id="full-transaction">
                <h2>Expense transaction history</h2>
                    <Transactions type={"Expense"}/>
                </div>

                <div className="transaction-form">
                    {/* <Header totalIncome={totalIncome} /> */}
                    <TransactionForm type={"Expense"} />
                    {/* <ExpenseTransactions income={income} setIncome={setIncome}/> */}
                    {/* <TransactionItem income={income} /> */}
                </div>
            </div>
        
        </>
       
    )
}

export default Expenses


