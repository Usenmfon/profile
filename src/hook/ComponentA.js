import React from 'react'
import ComponentC from './ComponentC'

export const userContext = React.createContext()

function ComponentA() {
    return (
        <userContext.Provider value={'Usenmfon'}>
            <ComponentC />
        </userContext.Provider>
    )
}

export default ComponentA
