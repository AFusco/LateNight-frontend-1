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
          templateUrl: 'views/events.html',
          controller: 'MainCtrl'
        })
        .when('/latenight', {
          templateUrl: 'views/latenight.html',
          controller: ''
        })
        .when('/events', {
          templateUrl: 'views/events.html',
          controller: 'EventsCtrl'
        })
        .when('/tickets', {
          templateUrl: 'views/tickets.html',
          controller: 'TicketsCtrl'
        })
        .when('/activity', {
          templateUrl: 'views/activity.html',
          controller: ''
        })
        .when('/setting', {
            templateUrl: 'views/setting.html',
            controller: ''
        })
        .otherwise({
          redirectTo: '/'
        });
  });
