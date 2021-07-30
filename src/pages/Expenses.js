import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'


function Expenses() {
    return ( 
        <body className="transaction-page ps-4">
            <h3 className="transaction-page-title ps-4 text-black-50">Expense transaction history</h3>
            <div className="transactions">
                <Transactions type={"Expense"} limit={15} />
            </div>
            <div className="transaction-form">
                <TransactionForm type={"Expense"} />
            </div>
        </body>
    )
}

export default Expenses


