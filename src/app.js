import angular from 'angular';

import 'angular-ui-router';
import 'angular-sanitize';

import AppComponent from './app.component';

import Components from './components/components';
import Common from './common/common';

import './app.scss';


angular
  .module('app', ['ui.router', 'ngSanitize', Components, Common])
  .config(($locationProvider) => {
    "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
    $locationProvider.html5Mode(true);
  })
  .config(($urlRouterProvider) => {
    "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
    $urlRouterProvider.otherwise('/home');
  })
  .component('app', AppComponent)
  .name
  ;

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['app']));

