import React, { useContext } from 'react'
import { userContext } from './ComponentA'

function ComponentC() {
    const user = useContext(userContext)
    return (
        <div>
            {user}
        </div>
    )
}

export default ComponentC
