// import React from 'react';
import React, {useState, useEffect} from 'react';
import TransactionForm from '../components/TransactionForm';
import ListTransactions from '../components/ListTransactions';
import TransactionItem from '../components/TransactionItem';

function Expenses() {
    const [income, setIncome] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        let addToBalance = 0;
        for(let i = 0; i < income.length; i++){
        addToBalance += parseInt(income[i].amount);
        }
        setTotalIncome(addToBalance)
    }, [income]);
    
    return ( 
        <div>
        <h1>expense</h1>
                <TransactionForm />
                {/* <ListTransactions />
                <TransactionItem /> */}
        </div>
       
    )
}

export default Expenses


