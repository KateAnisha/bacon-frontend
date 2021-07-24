import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

function Header() {
    const { budget } = useContext(stateContext)

    return (
        <header>
            {/* <h1>Income tracker</h1> */}
            {/* <div className="total-income">${totalIncome}</div> */}
            <div className="total-income">${budget}</div>
        </header>
    )
}

export default Header;
