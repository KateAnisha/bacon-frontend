import React from 'react'

import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'

// import '../components/assets/css/style.css'
import '../components/assets/css/transactions.css'

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
            <div className="expenses-page">
                <div className="display-transactions" id="full-transaction">
                <h2>Expense transaction history</h2>
                    <Transactions type={"expense"}/>
                </div>

                <div className="transaction-form" id="add-transaction">
                    {/* <Header totalIncome={totalIncome} /> */}
                    <TransactionForm type={"expense"} />
                    {/* <ExpenseTransactions income={income} setIncome={setIncome}/> */}
                    {/* <TransactionItem income={income} /> */}
                </div>
            </div>
        
        </>
       
    )
}

export default Expenses


