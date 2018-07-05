export const ACTIVATE_NAVITEM = 'ACTIVATE_NAVITEM';

const createAction = (action) => {
  return (data) => {
    return {
      type: action,
      data
    };
  } 
}

export const activateNavItem = createAction(ACTIVATE_NAVITEM);
