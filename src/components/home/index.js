import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeComponent from './home.component';
import itemsService from './items.service';

import './home.scss';


const home = angular
	.module('home', [
		uiRouter
	])
	.component('home', HomeComponent)
	.service('ItemsService', itemsService)
	.config(($stateProvider) => {
		"ngInject";		// ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
		$stateProvider
			.state('home', {
				url: '/home',
				template: '<home></home>'
			});
	})
	.name;

export default home;