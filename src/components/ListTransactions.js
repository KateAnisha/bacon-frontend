import React from 'react';
import TransactionItem from './TransactionItem';

function ListTransactions({income, setIncome}) {
    const removeTransaction = i => {
        let temp = income.filter((v, index) => index != i);
        setIncome(temp);
    }
    const sortByDate = (a, b) => {
        return a.date - b.date;
        
    }
    return (
        <div className="transaction-listing">
            {
                income.sort(sortByDate).map((value, index) => (
                    <TransactionItem 
                        key={index} 
                        income={value} 
                        index={index} 
                        removeTransaction={removeTransaction}
                    />
                ))
            }
        </div>
    )
}

export default ListTransactions;
