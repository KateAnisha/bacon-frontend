// import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';

import Login from './components/Login';
import MainNav from './components/MainNav';
import Welcome from './pages/Welcome';
import Expenses from './pages/Expenses';
import Registration from './components/auth/Registration';

function App() {
  
  return (
   
    <div className="App">
      <Welcome />
      <Registration />
      <Router>
      {/* Once user logged in, show main nav */}
      <MainNav />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>

        <Switch>
          <Route exact path="/expenses" component={Expenses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
