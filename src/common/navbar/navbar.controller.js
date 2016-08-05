class NavBarController {

  /*@ngInject*/
  constructor() {

    this.brand = 'App';

    this.items = [{
      href: '/home',
      label: 'Home'
    }, {
      href: '/about',
      label: 'About'
    }];

  }

}

export default NavBarController;