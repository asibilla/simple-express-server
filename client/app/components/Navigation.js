import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { activateNavItem } from '../store/actions';


function isOpen(navOpen) {
  return (navOpen) ? 'open' : '';
}

function isActive(id, activeNavItem) {
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
            <Link to={item.route} onClick={() => dispatchActivateNavItem(item.id)}>
              {item.name}
            </Link>
          </li>
      ) : null } 
      </ul>
    </nav>
  )
}

function mapStateToProps(state)  {
  return {
    navOpen: state.navigation.navOpen,
    activeNavItem: state.navigation.activeNavItem
  }
}

const mapDispatchToProps = {
  dispatchActivateNavItem: activateNavItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
