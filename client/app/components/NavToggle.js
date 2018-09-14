import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../store/actions';

function getNavState(navOpen) {
  return navOpen ? ' open' : '';
}

export function NavToggle({
  navOpen,
  dispatchToggleNav
}) {
  return (
    <div className={`nav-toggle${getNavState(navOpen)}`} onClick={dispatchToggleNav}>
      <div className="toggle-line"></div>
      <div className="toggle-line white"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line white"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line white"></div>
      <div className="toggle-line"></div>
    </div>
  );
}

function mapStateToProps(state) {
  return {  
    navOpen: (state & state.navOpen) ? state.navOpen.navOpen : null
  }
}

const mapDispatchToProps = {
  dispatchToggleNav: toggleNav
}

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle);
