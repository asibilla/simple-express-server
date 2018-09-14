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
            <NavLink to={item.path} onClick={() => dispatchActivateNavItem(item.id)}>
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
    navOpen: (state && state.navOpen) ? state.navOpen.navOpen : null,
    activeNavItem: (state && state.activateNavItem) ? state.activateNavItem.activeNavItem : null
  }
}

export const mapDispatchToProps = {
  dispatchActivateNavItem: activateNavItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
