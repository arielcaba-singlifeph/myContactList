var router = angular.module('angularRoutes', ['ui.router']);

router.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.html'
  });
  $stateProvider.state('add-contact', {
    url: '/add-contact',
    templateUrl: 'add-contact.html',
  });
  $stateProvider.state('contact-details', {
    url: '/contact-details',
    templateUrl: 'contact-details.html',
  });
});
