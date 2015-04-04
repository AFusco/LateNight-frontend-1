'use strict';

/**
 * @ngdoc function
 * @name lateNightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lateNightApp
 */
var app = angular.module('lateNightApp');

app.controller('MainCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        $log.debug('close LEFT is done');
      });
  };
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
      .then(function(){
        $log.debug('toggle left is done');
      });
  };

  $scope.menu = [
    { name: 'LateNight',
      image:'images/svg/heart75.svg',
      link: '#/latenight'},

    { name: 'Eventi',
      image:'images/svg/man204.svg',
      link: '#/events'},

    { name: 'Biglietti',
      image:'images/svg/ticket6.svg',
      link: '#/tickets'},

    { name: 'Attività',
      image:'images/svg/info.svg',
      link: '#/activity'},
  ];

  $scope.tabName = function() {
    return document.URL.split('#/')[1].charAt(0).toUpperCase()+document.URL.split('#/')[1].slice(1);
  };
});
