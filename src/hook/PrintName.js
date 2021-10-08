import React, { useState, useEffect} from 'react'

function PrintName() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const loggedPosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called!')
        window.addEventListener('mousemove', loggedPosition)

        return () => {
            window.removeEventListener('mousemove', loggedPosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default PrintName
