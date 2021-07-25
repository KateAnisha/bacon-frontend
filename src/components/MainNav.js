import React from 'react'
import { Link } from "react-router-dom"
import '../components/assets/css/mainnav.css';


function MainNav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/income">Income</Link></li>
        <li><Link to="/charts">Charts</Link></li>
      </ul>
  </nav>
  )
}

export default MainNav
