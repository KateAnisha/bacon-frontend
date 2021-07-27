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
                   <Transactions type={"Income"}/>
                </div>
                <div className="transaction-form">
                    <TransactionForm type={"Income"} />
                </div>
            </div>
        </>
       
    )
}

export default Expenses


