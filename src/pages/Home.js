import React from 'react'
import { Link } from "react-router-dom"

import Transactions from '../components/Transactions'

import '../components/assets/css/home.css'


function Home() {
    return (
        <>
            <h1> App home page </h1>
            <div className="home-wrapper">
                <div className="home-content">
                    <Transactions type={"income"} />
                </div>
                
                <div className="home-content">
                    <Transactions type={"expense"} />
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis dolorum incidunt non et, accusamus, praesentium voluptates nam, in veritatis optio. Ipsa eveniet obcaecati id, non nesciunt corrupti commodi assumenda.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
