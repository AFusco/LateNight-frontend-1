'use strict';

/**
 * @ngdoc overview
 * @name lateNightApp
 * @description
 * # lateNightApp
 *
 * Main module of the application.
 */
angular
  .module('lateNightApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('light-blue');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
