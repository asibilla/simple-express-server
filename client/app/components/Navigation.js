import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateNavItem } from '../store/actions';


export function isOpen(navOpen) {
  return (navOpen) ? 'open' : '';
}

export function isActive(id, activeNavItem) {
  return (id === activeNavItem) ? 'active' : '';
}

const Navigation = ({
  items,
  navOpen,
  activeNavItem,
  dispatchActivateNavItem
}) => {
  return (
    <nav className={isOpen(navOpen)}>
      <ul>
        { items ? 
        items.map((item) => 
          <li key={`link-item-${item.id}`} 
            className={isActive(item.id, activeNavItem)} 
          >
            <NavLink to={item.route} onClick={() => dispatchActivateNavItem(item.id)}>
              {item.name}
            </NavLink>
          </li>
      ) : null } 
      </ul>
    </nav>
  )
}

export function mapStateToProps(state)  {
  return {
    navOpen: state.navigation.navOpen,
    activeNavItem: state.navigation.activeNavItem
  }
}

export const mapDispatchToProps = {
  dispatchActivateNavItem: activateNavItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
