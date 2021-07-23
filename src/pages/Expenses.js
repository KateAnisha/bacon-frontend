// import React from 'react';
import React, {useState, useEffect} from 'react';
import TransactionForm from '../components/TransactionForm';
import ListTransactions from '../components/ListTransactions';
import TransactionItem from '../components/TransactionItem';
import Header from '../components/Header';

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
        <>
            <div className="content-wrapper">
                <div className="display-transactions">
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur cum placeat odio exercitationem, modi, pariatur tenetur officia ad dolore sunt a accusamus laboriosam, omnis perspiciatis impedit distinctio eos provident!
                    </p>
                </div>

                <div className="transaction-form">
                <h2>expense</h2>
                        <Header totalIncome={totalIncome} />
                        <TransactionForm income={income} setIncome={setIncome}/>
                        <ListTransactions income={income} setIncome={setIncome}/>
                        {/* <TransactionItem income={income} /> */}
                </div>
            </div>
        </>
       
    )
}

export default Expenses


