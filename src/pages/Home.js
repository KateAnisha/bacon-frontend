import React from 'react'
import '../components/assets/css/home.css';


import IncomeTransactions from '../components/IncomeTransactions'
import ExpenseTransactions from '../components/ExpenseTransactions'

import '../components/assets/css/home.css'


function Home() {
    return (
        <>
            <h1> App home page </h1>
            <div className="home-wrapper">
                <div className="home-content">
                    <IncomeTransactions />
                </div>
                
                <div className="home-content">
                    <ExpenseTransactions />
                </div>

                <div className="home-content">
                    <div className="nested">
                        <div className="container">
                            <div className="sub-menu">Manage Budget</div> <div className="arrow"></div>
                        </div>

                        <div className="container">
                            <div className="sub-menu">Manage Categories</div> <div className="arrow"></div>
                        </div>

                        <div className="container">
                            <div className="sub-menu">User Settings</div> <div className="arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis dolorum incidunt non et, accusamus, praesentium voluptates nam, in veritatis optio. Ipsa eveniet obcaecati id, non nesciunt corrupti commodi assumenda.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
