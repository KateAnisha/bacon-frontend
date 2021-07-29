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
        color: '#7c7c7c',
    }

    return (
        <header className="bg-light">
           
                
                    <img id="logo" src={appLogo} alt="Application Logo" className="app-logo ps-4" width="220px"/>    
            
                <div id="manage-budget">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" bsPrefix="p-0">
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
                        <Dropdown.Toggle variant="light" id="dropdown-basic" bsPrefix="p-0">
                            <span className="text-black-50">Manage Categories</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/budget" style={linkStyle}>
                                    Create Category
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/budget" style={linkStyle}>
                                    View Categories
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="user-setting">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" bsPrefix="p-0">
                        <span className="text-black-50">User Settings</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/budget" style={linkStyle}>
                                    Update Name
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/budget" style={linkStyle}>
                                    Update Password
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="budget-amount">
                    <h3 className="text-end text-black-50">Monthly Budget</h3>
                    <h3 id="amount" className="text-end">${budget}</h3>
                </div>
        
        </header>
        

    )
}