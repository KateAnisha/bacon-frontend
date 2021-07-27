import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'


export default function Income() {
    return ( 
        <>
            <div className="content-wrapper">
                <div className="display-transactions">
                   <Transactions type={"Income"}/>
                </div>
                <div className="transaction-form">
                    <TransactionForm type={"Income"} />
                </div>
            </div>
        </>
       
    )
}


