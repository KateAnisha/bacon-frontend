import React from 'react'
import { Link } from "react-router-dom"
import '../components/assets/css/mainnav.css';
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
        <li><Link to="/charts"><img src={Chart} alt="Chart Icon" className="nav-icon"/></Link></li>
      </ul>
  </nav>
  )
}

export default MainNav
