import { useState } from 'react'

export default function UpdateName() {
    const [name, setName] = useState("")

    return (
        <div>
            <h2>Update name</h2>
        <form>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Update" id="submit-btn" />
        </form>
        </div>
    )
}