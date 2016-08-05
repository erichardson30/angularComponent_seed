import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AboutComponent from './about.component';

// import './home.scss';


const home = angular
	.module('about', [
		uiRouter
	])
	.component('about', AboutComponent)
	.config(($stateProvider) => {
		"ngInject";		// ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
		$stateProvider
			.state('about', {
				url: '/about',
				template: '<about></about>'
			});
	})
	.name;

export default home;