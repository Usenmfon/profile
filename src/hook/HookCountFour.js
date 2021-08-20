import React, { useState } from 'react'

function HookCountFour() {

    const [items, setItems] = useState([])

    const AddItem = () => {
        setItems(() => [
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 20) + 1
            }
        ])
    }

    return (
        <div>
            <button onClick={AddItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCountFour
