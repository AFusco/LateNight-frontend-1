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

  $scope.tabName = function() {
    //return document.URL.split('#/')[1].charAt(0).toUpperCase()+document.URL.split('#/')[1].slice(1);
    if (document.URL.split('#/')[1] === 'events') {
      return 'Eventi';
    }
    if (document.URL.split('#/')[1] === 'tickets') {
      return 'Biglietti';
    }
    if (document.URL.split('#/')[1] === 'login') {
      return 'Login';
    }
    else {
      return 'Into the night';
    }
  };

  $scope.profilePic = function() {
    return 'images/toolbar/avatar.png';
  };

  $scope.profileName = function() {
    return 'Matteo Badini';
  };

  $scope.profileRole = function() {
    return 'Admin';
  };

});
