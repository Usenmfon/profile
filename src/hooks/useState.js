import React, { useState } from 'react'

function State() {
    // const [language, setLanguage] = useState('React')
    // const [age, setAge] = useState(0)
    // const handleChange = () => {
    //     setAge(prev => prev + 1)
    // }
    // const changeLanguge = () =>{
    //     setLanguage('React hooks')
    // }
    const [state, setState] = useState({
        language: 'react',
        years: 0
    })
    function changeLanguge(){
        setState({...state, language: 'React Hooks'})
    }
    function AddYears(){
        setState(prev => {
            return {...prev, years: prev.years + 1}
        })
    }
    const {language, years} = state
    return (
        <div>
            <p onClick={changeLanguge}>I am currently learning {language}</p>
            <p>I am {years} years old</p>
            <button onClick={AddYears}>Add year</button>
        </div>
    )
}

export default State
