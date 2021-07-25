import React, {useState} from 'react'

export default function CategoryForm({categories, setCategories}) {
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
