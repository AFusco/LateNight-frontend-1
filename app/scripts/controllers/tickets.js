/**
 * Created by mcode on 28/03/15.
 * Qui tramite API prendiamo i dati dei vari biglietti dal server
 * e li mostriamo a video attraverso la rispettiva view
 * I vari ordinamenti si possono gestire tramite Angular con i filtri
 * Per la grafica Angular-material
 */
'use strict';

var app = angular.module('lateNightApp');

app.controller('TicketsCtrl', function ($scope) {
    $scope.tickets = [
        {idTicket: 1, name: 'Estragon - Random Party', idParty:234},
        {idTicket: 2, name: 'Vintage - Closing Party', idParty:543},
        {idTicket: 3, name: 'Matis - Fuori Corso', idParty:732}
    ];
});