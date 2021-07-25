import React from 'react'
import { Link } from "react-router-dom"

import Transactions from '../components/Transactions'
import BarChart from '../components/BarChart'

import '../components/assets/css/home.css'


export default function Home() {
    return (
        <>
            <h1> App home page </h1>
            <div className="home-wrapper">
                <div className="home-content">
                    <Transactions type={"income"} limit={5} />
                </div>
                
                <div className="home-content">
                    <Transactions type={"expense"} limit={5} />
                </div>

                <div className="home-content">
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
            </div>
        </>
    )
}
