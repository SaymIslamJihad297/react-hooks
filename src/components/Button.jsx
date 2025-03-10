import React, { useContext } from 'react'
import NavBar from './NavBar'
import { countContext } from '../context/countContext'

const Button = () => {
    const { setCount } = useContext(countContext);
    return (
        <div>
            <NavBar />
            <button onClick={() => setCount((count) => count + 1)}>Button</button>
        </div>
    )
}

export default Button