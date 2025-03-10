import React, { useContext } from 'react'
import { countContext } from '../context/countContext'

const NavBar = () => {
    const { count } = useContext(countContext);
    return (
        <div>{count}</div>
    )
}

export default NavBar