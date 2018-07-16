import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({
  items,
  activate
}) => {
  return (
    <nav>
      <ul>
        { items ? 
        items.map((item, index) => 
          <li key={`link-item-${index}`} className="test">
            <Link to={item.route}>
              {item.name}
            </Link>
          </li>
      ) : null } 
      </ul>
    </nav>
  )
}

export default Navigation;
