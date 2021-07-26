import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import appLogo from '../components/assets/images/Logo-final.svg'
import '../components/assets/css/header.css'

function Header() {
    const { budget } = useContext(stateContext)

    return (
        <header>
            <img src={appLogo} alt="Application Logo" className="app-logo"/>
            {/* <h1>Income tracker</h1> */}
            {/* <div className="total-income">${totalIncome}</div> */}
            <div className="total-income">${budget}</div>
        </header>
    )
}

export default Header;
