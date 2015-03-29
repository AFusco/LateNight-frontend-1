'use strict';
/**
 * Created by mcode on 29/03/15.
 */
var app = angular.module('lateNightApp');
app.config( function($mdThemingProvider){
  // Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();
});
