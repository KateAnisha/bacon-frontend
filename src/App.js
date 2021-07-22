// import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';
import React, {useState} from 'react';
import Login from './pages/Login';
import MainNav from './components/MainNav';
import Welcome from './pages/Welcome';
import Expenses from './pages/Expenses';
import Register from './pages/Register';
import NewCategory from './components/NewCategory';
import './components/assets/css/style.css';
import appLogo from './components/assets/css/Logo-final.svg'

function App() {
  
  const [categories, setCategories] = useState([])
  return (
    <div className="App">
      <div className="header"> 
        {/* <img src={appLogo} alt="Application Logo" className="app-logo"/> */}
      </div>

      <div className="main-content">
        <Welcome />
        {/* <Registration /> */}
        {/* <NewCategory /> */}
      </div>

      <Router>
      {/* Once user logged in, show main nav */}
      {/* <div className="main-nav">
        <MainNav />
      </div> */}
        {/* <Switch>
          <Route exact path="/" component={Welcome} /> }
          <Route exact path="/category/new" render={() => <NewCategory{
            ...{setCategories}
           } /> } 
           />
        </Switch> */}

        <Switch>
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
