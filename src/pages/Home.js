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
            {/* <h2>Hi, {name ? name : ""} </h2> */}
            
            
                <div className="recent-income">
                    <Transactions type={"Income"} limit={5} />
                </div>
                
                <div className="recent-expense">
                    <Transactions type={"Expense"} limit={5} />
                </div>

                {/* <CreateCategory /> */}

                <div className="sub-menu">
                    <div className="submenu-items">
                        <h3>Manage Budget </h3>
                        <Link to="/budget" id="intro-link">Update budget</Link>
                        <h3>Manage Categories</h3>
                        <Link to="/categories" id="intro-link">View categories</Link>
                        <Link to="/categories/new" id="intro-link">Create category</Link>
                        <h3>User Settings</h3>
                        <Link to="/user/name" id="intro-link">Update name</Link>
                        <Link to="/user/password" id="intro-link">Update password</Link>
                    </div>
                </div>

                <div className="charts">
                    <BarChart />
                </div>

                
            
        </>
    )
}
