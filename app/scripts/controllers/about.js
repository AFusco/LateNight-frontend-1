'use strict';

/**
 * @ngdoc function
 * @name lateNightApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lateNightApp
 */
angular.module('lateNightApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
