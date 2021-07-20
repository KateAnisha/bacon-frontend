// import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';

import Login from './components/Login';
import MainNav from './components/MainNav';
import Index from './components/Index';
import Expenses from './pages/Expenses';

function App() {
  
  return (
   
    <div className="App">
      <Router>
      {/* Once user logged in, show main nav */}
      <MainNav />
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>

        <Switch>
          <Route exact path="/expenses" component={Expenses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
