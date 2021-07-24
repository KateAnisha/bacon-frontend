import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'

function Expenses() {
    // const [income, setIncome] = useState([]);
    // const [totalIncome, setTotalIncome] = useState(0);

    // useEffect(() => {
    //     let addToBalance = 0;
    //     for(let i = 0; i < income.length; i++){
    //     addToBalance += parseInt(income[i].amount);
    //     }
    //     setTotalIncome(addToBalance)
    // }, [income]);
    
    return ( 
        <>
            <div className="content-wrapper">
                <div className="display-transactions">
                   <Transactions type={"income"}/>
                </div>
                <div className="transaction-form">
                    {/* <Header totalIncome={totalIncome} /> */}
                    <TransactionForm type={"income"} />
                    {/* <ExpenseTransactions income={income} setIncome={setIncome}/> */}
                    {/* <TransactionItem income={income} /> */}
                </div>
            </div>
        </>
       
    )
}

export default Expenses


