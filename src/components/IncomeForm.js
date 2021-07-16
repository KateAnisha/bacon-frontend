import React, {useRef} from 'react';

function IncomeForm({income, setIncome}) {
    const description = useRef(null);
    const date = useRef(null);
    const amount = useRef(null);

    const AddIncome = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        setIncome([...income, {
            "description": description.current.value,
            "amount": amount.current.value,
            "date": newD.getTime()
        }])

        description.current.value = "";
        amount.current.value = null;
        date.current.value = null;
    }

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <input type="text" name="transaction-description" id="transaction-description" placeholder="Description" ref={description}/>
            <input type="decimal" name="amount" id="amount" placeholder="Amount" ref={amount}/>
            <input type="date" name="date" id="date" placeholder="date" ref={date}/>
            <input type="submit" value="Add transaction"/>
       </form>
    )
}

export default IncomeForm
