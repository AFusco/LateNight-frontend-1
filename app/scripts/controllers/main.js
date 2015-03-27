'use strict';

/**
 * @ngdoc function
 * @name lateNightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lateNightApp
 */
angular.module('lateNightApp')
	.controller('MainCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
	}]);
