import React, {useState} from 'react'

export default function NewCategory({setCategory}) {
    const [categoryName, setCategoryName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault() 
        const CreateNewCategory = {
            categoryName: categoryName
        }
        setCategoryName(CreateNewCategory)
        console.log(categoryName)
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
