// import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';
import React, {useState} from 'react';
import Login from './components/Login';
import MainNav from './components/MainNav';
import Welcome from './pages/Welcome';
import Expenses from './pages/Expenses';
import Registration from './components/auth/Registration';
import NewCategory from './components/NewCategory';

function App() {
  
  const [categories, setCategories] = useState([])
  return (
    <div className="App">
      <Welcome />
      <Registration />
      {/* <NewCategory /> */}
      

      <Router>
      {/* Once user logged in, show main nav */}
        <MainNav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/category/new" render={() => <NewCategory{
            ...{setCategories}
           } /> } 
           />
        </Switch>

        <Switch>
          <Route exact path="/expenses" component={Expenses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
