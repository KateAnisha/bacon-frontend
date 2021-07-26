import React from 'react'
import { Link } from "react-router-dom"
import '../components/assets/css/style.css';
import Home from '../components/assets/images/link-img/home.svg'
import Income from '../components/assets/images/link-img/income.svg'
import Chart from '../components/assets/images/link-img/chart.svg'
import Expenses from '../components/assets/images/link-img/expenses.svg'
          

function MainNav() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><img src={Home} alt="Home Icon" className="nav-icon"/></Link></li>
        <li><Link to="/expenses"><img src={Expenses} alt="Chart Icon" className="nav-icon"/></Link></li>
        <li><Link to="/income"><img src={Income} alt="Chart Icon" className="nav-icon"/></Link></li>
        <li><Link to="/dashboard"><img src={Chart} alt="Chart Icon" className="nav-icon"/></Link></li>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/income">Income</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> */}
      </ul>
    </nav>
  )
}

export default MainNav
