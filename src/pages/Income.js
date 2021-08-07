import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'


export default function Income() {
    return ( 
        <body className="transaction-page ps-4">
            <h3 className="transaction-page-title ps-4 text-black-50">Income transaction history</h3>
            <div className="transactions">
                <Transactions type={"Income"} limit={15} />
            </div>
            <h3 className="transaction-form-title text-black-50">Add income transaction</h3>
            <div className="transaction-form">
                <TransactionForm type={"Income"} />
            </div>
        </body>
       
    )
}


