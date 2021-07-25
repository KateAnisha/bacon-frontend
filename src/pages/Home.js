import React from 'react'
// import '../components/assets/css/home.css';
import CategoryForm from '../components/CategoryForm'
import { Link } from "react-router-dom"

import Transactions from '../components/Transactions'

import '../components/assets/css/style.css'
import '../components/assets/css/main.css'


function Home() {
    return (
        <>
            
            {/* <div className="home-wrapper"> */}
                <div className="recent-income">
                    <h2>Recent Income</h2>
                    <Transactions type={"income"} />
                </div>
                
                <div className="recent-expense">
                    <h2>Recent Expenses</h2>
                    <Transactions type={"expense"} />
                </div>

                <CategoryForm />


                {/* <div className="sub-menu">
                    <div className="nested">
                        <div className="container">
                            <div className="sub-menu">Manage Budget</div> <div className="arrow"></div>
                        </div>

                        <div className="container">
                            <div className="sub-menu">Manage Categories</div> <div className="arrow"></div>
                            <NewCategory />
                        </div>
                        <div>
                            <Link to="/categories">View Categories</Link>
                        </div>

                        <div className="container">
                            <div className="sub-menu">User Settings</div> <div className="arrow"></div>
                        </div>
                    </div>
                </div> */}

                <div className="charts">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis dolorum incidunt non et, accusamus, praesentium voluptates nam, in veritatis optio. Ipsa eveniet obcaecati id, non nesciunt corrupti commodi assumenda.
                    </p>
                </div>
            {/* </div> */}
        </>
    )
}

export default Home
