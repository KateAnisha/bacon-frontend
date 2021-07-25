import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect, useReducer } from 'react'
import stateReducer, { stateContext } from './stateReducer'
import { useCookies } from 'react-cookie'
import { Redirect } from "react-router-dom"


import Welcome from './pages/Welcome'
import Entrance from './pages/Entrance'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './components/Header'
import MainNav from './components/MainNav'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
import Charts from './pages/Charts'
import Categories from './components/Categories'

import './components/assets/css/style.css'
import BudgetForm from './components/BudgetForm'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    transactions: [],
    budget: 0,
    token: ""
  })

  function setTokenCookie(token) {
    setCookie('token', token, { path: '/' } )
  }

  useEffect(async () => {
    if (!cookies.token) return
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/transactions`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    })
    const data = await res.json()
    if (res.status === 200) {
      dispatch({
        type: "setTransactions",
        transactions: data,
      })
    } else {
      removeCookie("token")
    }
  }, [store.token])

  useEffect(async () => {
    if (!cookies.token) return
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/categories`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    })
    const data = await res.json()
    if (res.status === 200) {
      dispatch({
        type: "setCategories",
        categories: data,
      })
    } else {
      removeCookie("token")
    }
  }, [store.token])

  useEffect(async () => {
    if (!cookies.token) return
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}user/budget`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    })
    const data = await res.json()
    if (res.status === 200) {
      dispatch({
        type: "setBudget",
        transactions: data,
      })
    } else {
      removeCookie("token")
    }
  }, [store.token])

  return (
    <stateContext.Provider value={{ ...store, dispatch }}>
      {
        cookies.token ? 
          <div className="App">
            <Router>
              <Header />
              <MainNav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/income" component={Income} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/budget" component={BudgetForm} />
                {/* <Route exact path="/dashboard" component={Charts} /> */}
              </Switch>
            </Router>
          </div> : 
          <Router>
            <Redirect to="/entrance" />
            <Switch>
              <Route exact path="/entrance" component={Entrance} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        
      }
    </stateContext.Provider>
  )
















  // const [categories, setCategories] = useState([])
  // return (
  //   <div className="App">
  //     {/* <div className="header">  */}
  //       {/* <img src={appLogo} alt="Application Logo" className="app-logo"/> */}
  //     {/* </div> */}

  //     {/* <div className="main-content"> */}
  //       <Welcome />
  //       <Home />
  //       {/* <Registration /> */}
  //       {/* <NewCategory /> */}
  //     {/* </div> */}

  //     <Router>
  //     {/* Once user logged in, show main nav */}
  //     {/* <div className="main-nav">
  //       <MainNav />
  //     </div> */}
  //       {/* <Switch>
  //         <Route exact path="/" component={Welcome} /> }
  //         <Route exact path="/category/new" render={() => <NewCategory{
  //           ...{setCategories}
  //          } /> } 
  //          />
  //       </Switch> */}

  //       <Switch>
  //         <Route exact path="/expenses" component={Expenses} />
  //         <Route exact path ="/login" component={Login} />
  //         <Route exact path ="/register" component={Register} />
  //         <Route exact path="/income" component={Income} />
  //       </Switch>
  //     </Router>
  //   </div>
  // );
}

export default App;
