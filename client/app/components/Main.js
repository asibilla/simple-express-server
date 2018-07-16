import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Home from './Home';
import Test from './Test';
import { activateNavItem } from '../store/actions';
import { main } from '../styles/styles';


const Main = ({
  navItems,
  activateNavItem
}) => {
  return (
    <main style={main}>
      <Navigation items={navItems} activate={activateNavItem} />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/test' render={(props) => <Test {...props} />}/>
      </Switch>
    </main>
  )
};

const mapStateToProps = function(state) {
  console.log('the state', state);
  return {
    navItems: state.navigation.navItems
  }
};

const mapDispatchToProps = {
  activateNavItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
