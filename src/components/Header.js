import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

import appLogo from '../components/assets/images/Logo-final.svg'
import '../components/assets/css/header.css'


export default function Header() {
    const { budget } = useContext(stateContext)

    return (
        <header>
            <img src={appLogo} alt="Application Logo" className="app-logo"/>
            <div class="budget">
                <h2 >Monthly budget</h2>
                <h1 id="budget-amount">${budget}</h1>
            </div>
        </header>
    )
}