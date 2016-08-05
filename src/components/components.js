import angular from 'angular';
import Home from './home';
import About from './about';

const components = angular
  .module('app.components', [
    Home,
    About
  ])
  .name;

  export default components;