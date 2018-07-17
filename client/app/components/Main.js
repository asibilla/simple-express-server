import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavToggle from './NavToggle';
import Navigation from './Navigation';
import Home from './Home';
import Test from './Test';
import '../styles/styles.css';


const Main = ({
  navItems
}) => {
  return (
    <main>
      <header>
        <NavToggle />
        <Navigation items={navItems} />
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
  return {
    navItems: state.navigation.navItems
  }
};


export default connect(mapStateToProps)(Main);
