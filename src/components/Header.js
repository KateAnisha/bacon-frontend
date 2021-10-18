import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

import appLogo from '../components/assets/images/Logo-final.svg'


export default function Header() {
    const { budget } = useContext(stateContext)
    const linkStyle = {
        textDecoration: 'none', 
        color: '#7c7c7c'
    }
    const toggleStyle = {
        backgroundColor:'#ededed', 
        border: 'none',
        boxShadow: 'none'
    }

    return (
        <header>
            <nav>
                <img id="logo" src={appLogo} alt="Application Logo" className="app-logo" width="220px"/>    
                <div id="manage-budget">
                    <Dropdown>
                        <Dropdown.Toggle style={toggleStyle} bsPrefix="p-0">
                            <span className="text-black-50">Manage Budget</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/budget" style={linkStyle}> 
                                    Update Budget
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="manage-category">
                    <Dropdown>
                        <Dropdown.Toggle style={toggleStyle} bsPrefix="p-0">
                            <span className="text-black-50">Manage Categories</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/categories/new" style={linkStyle}>
                                    Create Category
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/categories" style={linkStyle}>
                                    View Categories
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="user-setting">
                    <Dropdown>
                        <Dropdown.Toggle style={toggleStyle} bsPrefix="p-0">
                        <span className="text-black-50">User Settings</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/user/name" style={linkStyle}>
                                    Update Name
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/user/password" style={linkStyle}>
                                    Update Password
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
            <div id="budget-amount">
                <h3 className="text-end text-black-50">Monthly Budget</h3>
                <h3 id="amount" className="text-end">${budget}</h3>
            </div>
        </header>
    )
}