import angular from 'angular';

import NavBar from './navbar';

const common = angular
	.module('app.common', [
		NavBar
	])
	.name;

export default common;	