import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import Home from '../components/assets/images/link-img/home.svg'
import Income from '../components/assets/images/link-img/income.svg'
import Chart from '../components/assets/images/link-img/chart.svg'
import Expenses from '../components/assets/images/link-img/expenses.svg'

        
export default function MainNav() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  return (
    <nav className="d-flex flex-column justify-content-evenly align-items-center bg-light main-nav">
        <div className="flex-row">
          <Link to="/"><img src={Home} alt="Home Icon" width="62px"/></Link>
        </div>
        <div className="flex-row">
          <Link to="/expenses"><img src={Expenses} alt="Expense Icon" width="63px"/></Link>
        </div>
        <div className="flex-row">
          <Link to="/income"><img src={Income} alt="Income Icon" height="75px"/></Link>
        </div>
        <div className="flex-row">
          <Link to="/dashboard"><img src={Chart} alt="Chart Icon" width="60px"/></Link>
        </div>
        <div className="flex-row">
          <Link to="/entrance" onClick={() => removeCookie('token')}>LOUT OUT</Link>
        </div>
    </nav>
  )
}

