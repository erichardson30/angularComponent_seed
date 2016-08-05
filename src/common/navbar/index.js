import angular from 'angular';
import NavBarComponent from './navbar.component';

const navbar = angular
	.module('navbar', [])
	.component('navbar', NavBarComponent)
	.name;

export default navbar;