import React, { useState, useEffect} from 'react'

function Effect() {
    const [color, setColor] = useState('navy')
    useEffect(() => {
        document.body.style.background = color;
        document.body.style.color = 'white'
        
        window.addEventListener('keydown', handleEnterButton)

        return () => {
            window.removeEventListener('keydown', handleEnterButton)
        }
    }, [color])

    function handleEnterButton(event) {
        if(event.keycode === 13){
            setColor('red')
        }
    }

    function changeColor(){
        setColor('gold')
    }
    return (
        <div>
            <p onClick={changeColor}>Hey React</p>
        </div>
    )
}

export default Effect