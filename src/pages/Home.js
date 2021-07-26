import React from 'react'
import { Link } from "react-router-dom"

import Transactions from '../components/Transactions'
import BarChart from '../components/BarChart'

import '../components/assets/css/style.css'


export default function Home() {
    return (
        <>
            <h1> App home page </h1>
            
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
                            <div className="sub-menu">Manage Budget</div> <div className="arrow"></div>
                        </div>

                        <div>
                            <Link to="/budget">Update budget</Link>
                        </div>

                        <div className="container">
                            <div className="sub-menu">Manage Categories</div> <div className="arrow"></div>
                        </div>
                        <div>
                            <Link to="/categories">View Categories</Link>
                        </div>

                        <div className="container">
                            <div className="sub-menu">User Settings</div> <div className="arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <BarChart />
                </div>
            
        </>
    )
}
