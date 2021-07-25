import React from 'react'
import '../components/assets/css/home.css';
import NewCategory from '../components/NewCategory'

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

                <NewCategory />


                {/* <div className="home-content">
                    <div className="nested">
                        <div className="container">
                            <div className="sub-menu">Manage Budget</div> <div className="arrow"></div>
                        </div>

                        <div className="container">
                            <div className="sub-menu">Manage Categories</div> <div className="arrow"></div>
                            <NewCategory />
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
            </div>
        </>
    )
}

export default Home
