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
        {idParty: 1, name: 'Estragon - Random Party', image:'./images.yeoman.png'},
        {idParty: 2, name: 'Vintage - Closing Party'},
        {idParty: 3, name: 'Matis - Fuori Corso'}
    ];
});