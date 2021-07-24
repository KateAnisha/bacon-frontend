import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

function Header() {
    const { budget } = useContext(stateContext)

    return (
        <header>
            <div className="total-income">${budget}</div>
        </header>
    )
}

export default Header;
