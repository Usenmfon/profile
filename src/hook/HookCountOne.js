import React, { useState, useEffect } from 'react'

function HookCountOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect updating title')
        document.title = `clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>clicked {count} times</button>
        </div>
    )
}

export default HookCountOne
