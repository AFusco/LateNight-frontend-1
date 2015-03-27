'use strict';

/**
 * @ngdoc function
 * @name lateNightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lateNightApp
 */
angular.module('lateNightApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
