import React, {useState} from 'react'
import {useCookies } from 'react-cookie'

export default function NewCategory({categories, setCategories}) {
    const [cookies] = useCookies(["token"])

    const [categoryName, setCategoryName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault() 
        const CreateNewCategory = {
            name: categoryName
        }
        setCategories([...categories, CreateNewCategory])
        console.log(categories)
    }
    return (
        <>
            <h1>New Category</h1>
            <form onSubmit={handleSubmit}>
                <label>Category Name</label>
                <input value={categoryName} onChange={event => setCategoryName(event.target.value)}/>
            <button>Submit</button>
            </form>
        </>
    )
} 








