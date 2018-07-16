import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavToggle from './NavToggle';
import Navigation from './Navigation';
import Home from './Home';
import Test from './Test';
import { activateNavItem } from '../store/actions';
import '../styles/styles.css';


const Main = ({
  navItems,
  activateNavItem
}) => {
  return (
    <main>
      <header>
        <NavToggle />
        <Navigation items={navItems} activate={activateNavItem} />
      </header>
      <section>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/test' render={(props) => <Test {...props} />}/>
        </Switch>
      </section>
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
