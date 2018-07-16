import NavItem from '../classes/NavItem';

export const initialState = {
  navItems : [
    new NavItem(
      0,
      'Home',
      '/',
      true
    ),
    new NavItem(
      1,
      'Page 1',
      '/page/1',
      false
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
  ]
}
