import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import ListTransactions from './components/ListTransactions';
import Login from './components/Login';
import MainNav from './components/MainNav';

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let addToBalance = 0;
    for(let i = 0; i < income.length; i++){
      addToBalance += parseInt(income[i].amount);
    }
    setTotalIncome(addToBalance)
  }, [income]);
  return (
   

    <div className="App">
      <BrowserRouter>
      <MainNav />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome}/>
      <ListTransactions income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
