import Home from '../components/Home';
import Page from '../components/Page';

class route {
  constructor(
    id,
    name,
    path,
    component
  ) {
    this.id = id;
    this.name = name;
    this.path = path;
    this.component = component;
  }
}


const routes = [
  new route(
    0,
    'Home',
    '/',
    Home,
  ),
  new route(
    1,
    'Page 1',
    '/page/1',
    Page
  ),
  new route(
    2,
    'Page 2',
    '/page/2',
    Page
  ),
  new route(
    3,
    'Page 3',
    '/page/3',
    Page
  )
];

export default routes;