import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

import Transactions from '../components/Transactions'
import BarChart from '../components/BarChart'

import '../components/assets/css/style.css'


export default function Home() {
    const { name } = useContext(stateContext)

    return (
        <>
            <div className="welcome grid-column">
                <h2 className="welcome-msg">Hi, {name ? name : ""}</h2>
                <h2 className="title">Recent transactions</h2>
            </div>
            <div className="grid-column recent-income-container">
                <div className="recent-income">
                    <h3 class="transaction-type">Income</h3>
                    <Transactions type={"Income"} limit={5} />
                </div>
            </div>
            <div className="grid-column recent-expense-container">
                <div className="recent-expense">
                    <h3 class="transaction-type">Expense</h3>
                    <Transactions type={"Expense"} limit={5} />
                </div>
            </div>
            <div className="sub-menu grid-column">
                <div className="nested">
                    <div className="container">
                        <p className="sub-menu">Manage Budget</p> 
                        <Link to="/budget">Update budget</Link>
                    </div>
                    <div className="container">
                        <p className="sub-menu">Manage Categories</p>
                        <Link to="/categories" >View categories</Link>
                        <br />
                        <Link to="/categories/new">Create category</Link>
                    </div>
                    <div className="container">
                        <p className="sub-menu">User Settings</p>
                        <Link to="/user/name">Update name</Link>
                        <br />
                        <Link to="/user/password">Update password</Link>
                    </div>
                </div>
            </div>
            <div className="charts grid-column">
                <h2 className="title">Monthly spending</h2>
                <BarChart />
            </div>
        </>
    )
}
