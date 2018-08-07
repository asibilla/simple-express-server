import NavItem from '../classes/NavItem';

const navItems = [
  new NavItem(
    0,
    'Home',
    '/'
  ),
  new NavItem(
    1,
    'Page 1',
    '/page/1'
  ),
  new NavItem(
    2,
    'Page 2',
    '/page/2'
  ),
  new NavItem(
    3,
    'Page 3',
    '/page/3'
  )
];

export const initialState = {
  navOpen: false,
  navItems : navItems,
  activeNavItem: 0,
  contentLoaded : navItems.map(() => false)
}
