export default class NavItem {
  constructor(
    id,
    name,
    route,
    active = false
  ) {
    this.id = id;
    this.name = name;
    this.route = route;
    this.active = active;
  }
}
