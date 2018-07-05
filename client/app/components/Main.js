import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Test from './Test';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/test' render={(props) => <Test {...props} />}/>
      </Switch>
    </main>
  )
};

export default Main;
