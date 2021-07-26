import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect, useReducer } from 'react'
import stateReducer, { stateContext } from './stateReducer'
import { useCookies } from 'react-cookie'
import { Redirect } from "react-router-dom"


import Entrance from './pages/Entrance'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './components/Header'
import MainNav from './components/MainNav'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
import Dashboard from './pages/Dashboard'
import Categories from './components/Categories'
import BudgetForm from './components/BudgetForm'
import CreateCategory from './components/CreateCategory'
import UpdateCategory from './components/UpdateCategory'
import UpdateTransaction from './components/UpdateTransaction'

import './components/assets/css/style.css'


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
        budget: data.amount
      })
    } else {
      removeCookie("token")
    }
  }, [store.token])

  return (
    <stateContext.Provider value={{ ...store, dispatch }}>
      <div className="App">
        <Router>
          { cookies.token ? 
            <>
            <Header />
            <MainNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/income" component={Income} />
              <Route exact path="/expenses" component={Expenses} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/categories/:category_id" component={UpdateCategory} />
              <Route exact path="/transactions/:transaction_id" component={UpdateTransaction} />
              <Route exact path="/budget" component={BudgetForm} />
              {/* <Route exact path="/dashboard" component={Charts} /> */}
            </Switch>
            </> :
            <>
            <Redirect to="/entrance" />
            <Switch>
              <Route exact path="/entrance" component={Entrance} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
            </>
          }
        </Router>
      </div>
    </stateContext.Provider>
  )
}

export default App;
