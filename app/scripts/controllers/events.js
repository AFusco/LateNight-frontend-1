/**
 * Created by mcode on 28/03/15.
 * Qui tramite API prendiamo i dati dei vari eventi dal server
 * e li mostriamo a video attraverso la rispettiva view
 * I vari ordinamenti si possono gestire tramite Angular con i filtri
 * Per la grafica Angular-material
 */
'use strict';

var app = angular.module('lateNightApp');

app.controller('EventsCtrl', function ($scope) {
  $scope.events = [
    {idParty: 1, name: 'Estragon - Random Party', image:'http://5.231.59.180/LateNight/party3.jpg', description: 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...'},
    {idParty: 2, name: 'Vintage - Closing Party', image:'http://5.231.59.180/LateNight/party2.jpg', description: ''},
    {idParty: 3, name: 'Numa - Extradate', image:'http://5.231.59.180/LateNight/party1.jpg', description: ''}
  ];
});
