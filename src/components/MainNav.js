import React from 'react'
import { Link } from "react-router-dom"

function MainNav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/income">Income</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default MainNav
