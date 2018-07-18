import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavToggle from './NavToggle';
import Navigation from './Navigation';
import Home from './Home';
import Page from './Page';
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
          <Route path='/page/:id' component={Page} />}/>
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


export default withRouter(connect(mapStateToProps)(Main));
