import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HastPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HastPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
