import HomeController from './home.controller';

const HomeComponent = {
	bindings: {
		items: '<'
	},
	template: require('./home.html'),
	controller: HomeController
};

export default HomeComponent;