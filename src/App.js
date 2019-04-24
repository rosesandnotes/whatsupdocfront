import React from 'react';
import './App.css';
import {Success} from './routes/users/success';
import {About} from './routes/about/index';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return <div>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/sucess" component={Success} />
    </Switch>
  </div>
}

export default App;
