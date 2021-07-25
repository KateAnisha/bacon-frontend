import React, { useState } from 'react';
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"



import '../components/assets/css/main.css';

export default function Register() {
    const history = useHistory()
    const [cookies, setCookie] = useCookies(['token'])
    const { dispatch } = useContext(stateContext)
    const [errorMessage, setErrorMessage] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const submit = async (event) => {
        event.preventDefault()
        const user = { name, email, password }
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/me`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (res.status === 201) {
            setCookie('token', data.token, { path: '/' })
            dispatch({
                type: "setToken",
                token: data.token
            })
            setName("")
            setEmail("")
            setPassword("")
            setPasswordConfirm("")
            // history.push("/")
        } else {
        setErrorMessage(data.error)
        }
    }

    return (
        <div>
            <h2>REGISTER</h2>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
                <form className="" onSubmit={submit}>
                    <input type="text" value={name} name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" value={passwordConfirm} name="passwordConfirm" placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <input type="submit" value="Add transaction" id="submit-btn" />
                </form>
        </div>
    )
}


// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { stateContext } from '../stateReducer'
// import { useCookies } from 'react-cookie'

// import '../components/assets/css/style.css';


// export default function CategoryForm() {
//     const [errorMessage, setErrorMessage] = useState()
//     const [cookies] = useCookies(['token'])
//     const [description, setDescription] = useState("")
//     const [type, setType] = useState()
//     const { categories, dispatch } = useContext(stateContext)

//     const submit = async (event) => {
//         event.preventDefault()
//         // console.log(categories)
//         // console.log(type)
//         // console.log(description)
//         if (categories.find(category => category.type === type && category.description === description) === undefined) {
//             const cateogry = { description: description, category_type: type }
//             const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/categories`, {
//                 method: "POST",
//                 body: JSON.stringify(cateogry),
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${cookies.token}`
//                 }
//             })
//             const data = await res.json()
//             if (res.status === 201) {
//                 dispatch({
//                     type: "addCategory",
//                     data
//                 })
//                 setDescription("")
//                 setType("")
//             } else {
//             setErrorMessage(data.error)
//             }
//         } else {
//             setErrorMessage("Category already exists")
//         }
        
//     }
//     // const description = useRef(null);
//     // const date = useRef(null);
//     // const amount = useRef(null);

//     // const AddIncome = e => {
//     //     e.preventDefault();

//     //     let d = date.current.value.split("-");
//     //     let newD = new Date(d[0], d[1] - 1, d[2]);

//     //     setIncome([...income, {
//     //         "description": description.current.value,
//     //         "amount": amount.current.value,
//     //         "date": newD.getTime()
//     //     }])

//     //     description.current.value = "";
//     //     amount.current.value = null;
//     //     date.current.value = null;
//     // }
  

//     return (
//         <>
//             <h2>Add category</h2>
//             {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
//             {/* {console.log(categories)} */}
//             <form className="transaction-form" onSubmit={submit}>
//                 <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
//                     <option>Type</option>
//                     <option value="income">Income</option>
//                     <option value="expense">Expense</option>
//                 </select>
//                 <input type="text" value={description} name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
//                 <input type="submit" value="Add transaction" id="submit-btn" />


//                 {/* <input type="text" name="transaction-description" id="transaction-description" placeholder="Description" ref={description}/>
//                 <input type="decimal" name="amount" id="amount" placeholder="Amount" ref={amount}/>
//                 <input type="date" name="date" id="date" placeholder="date" ref={date}/>
//                 <datalist id="categories">
//                     <option value="food">Food</option>
//                     <option value="travel">Travel</option>
//                     <option value="health">Health</option>
//                 </datalist>
//                 <input type="submit" value="Add transaction" id="submit-btn"/> */}
//             </form>
//         </>
//     )

// }


