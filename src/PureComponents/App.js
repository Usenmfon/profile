import React, { useState } from 'react'

function App() {
    const [sum, setSum] = useState(0)
    const [num, setNum] = useState(0)

    const handleChange = e => setNum(e.target.value)
    const handleSubmit = e => {
        setSum(sum + Number(num))
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={num}  onChange={handleChange} />
            <input type="submit" value="Add" />
            <p>Sum is {sum}</p>
        </form>
    )
}

export default App
