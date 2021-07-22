import React from 'react';

function TransactionItem({income, index, removeTransaction}) {
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeTransaction(i);
    }
    return (
        <div className="transaction-item">
            <button className="remove" onClick={() => removeHandle(index)}>x</button>
            <div className="description">{income.description}</div>
            <div className="amount">${income.amount}</div>
            <div className="date">{day + "." + month + "." + year}</div>
        </div>

        
    )
}

export default TransactionItem;
