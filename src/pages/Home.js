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
            <h2>Hi, {name ? name : ""} </h2>
            
                <div className="recent-income">
                    <Transactions type={"Income"} limit={5} />
                </div>
                
                <div className="recent-expense">
                    <Transactions type={"Expense"} limit={5} />
                </div>

                {/* <CreateCategory /> */}


                <div className="sub-menu">
                    <div className="nested">
                        <div className="container">
                            <div className="sub-menu">Manage Budget</div> 
                            <div className="arrow"></div>
                            <Link to="/budget">Update budget</Link>
                        </div>

                        <div className="container">
                            <div className="sub-menu">Manage Categories</div>
                            <div className="arrow"></div>
                            <Link to="/categories">View categories</Link>
                            <br />
                            <Link to="/categories/new">Create category</Link>
                        </div>
                        
                        <div className="container">
                            <div className="sub-menu">User Settings</div>
                            <div className="arrow"></div>
                            <Link to="/user/name">Update name</Link>
                            <br />
                            <Link to="/user/password">Update password</Link>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <BarChart />
                </div>
            
        </>
    )
}
