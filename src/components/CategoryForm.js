import React, { useState } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'

import '../components/assets/css/style.css';


export default function CategoryForm() {
    const [errorMessage, setErrorMessage] = useState()
    const [cookies] = useCookies(['token', 'user_id'])
    const [description, setDescription] = useState("")
    const [type, setType] = useState()
    const { categories, dispatch } = useContext(stateContext)

    const submit = async (event) => {
        event.preventDefault()
        console.log(cookies.user_id)
        const cateogry = { description: description, user_id: cookies.user_id, category_type: Number(type) }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/categories`, {
            method: "POST",
            body: JSON.stringify(cateogry),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookies.token}`
            }
        })
        const data = await res.json()
        if (res.status === 201) {
            dispatch({
                type: "addCategory",
                data
            })
            setDescription("")
            setType("")
        } else {
            setErrorMessage(data.error)
        }
    }
    // const description = useRef(null);
    // const date = useRef(null);
    // const amount = useRef(null);

    // const AddIncome = e => {
    //     e.preventDefault();

    //     let d = date.current.value.split("-");
    //     let newD = new Date(d[0], d[1] - 1, d[2]);

    //     setIncome([...income, {
    //         "description": description.current.value,
    //         "amount": amount.current.value,
    //         "date": newD.getTime()
    //     }])

    //     description.current.value = "";
    //     amount.current.value = null;
    //     date.current.value = null;
    // }
  

    return (
        <>
            <h2>Add category</h2>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            {/* {console.log(categories)} */}
            <form className="transaction-form" onSubmit={submit}>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option>Type</option>
                    <option value="0">Income</option>
                    <option value="1">Expense</option>
                </select>
                <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Add transaction" id="submit-btn" />


                {/* <input type="text" name="transaction-description" id="transaction-description" placeholder="Description" ref={description}/>
                <input type="decimal" name="amount" id="amount" placeholder="Amount" ref={amount}/>
                <input type="date" name="date" id="date" placeholder="date" ref={date}/>
                <datalist id="categories">
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="health">Health</option>
                </datalist>
                <input type="submit" value="Add transaction" id="submit-btn"/> */}
            </form>
        </>
    )

}


