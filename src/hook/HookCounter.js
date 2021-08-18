import React, { useState} from 'react'

function HookCounter() {
    let initialValue = 0
    const [count, setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount(preValue => preValue + 1)
    }

    return (
        <div>
            count : {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => setCount(preValue => preValue - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounter
