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
    { idParty: 1,
      name: 'Estragon - Random Party',
      image:'http://5.231.59.180/LateNight/party3.jpg',
      description: 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
      date: '18 Marzo, Dalle 22:00 alle 04:00',
      location: 'Bologna, Via Marco 12'
    },

    { idParty: 2,
      name: 'Vintage - Closing Party',
      image:'http://5.231.59.180/LateNight/party2.jpg',
      description: 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
      date: '18 Marzo, Dalle 22:00 alle 04:00',
      location: 'Bologna, Via Marco 12'
    },

    { idParty: 3,
      name: 'Numa - Extradate',
      image:'http://5.231.59.180/LateNight/party1.jpg',
      description: 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
      date: '18 Marzo, Dalle 22:00 alle 04:00',
      location: 'Bologna, Via Marco 12'
    }
  ];
});

app.controller('AppCtrl', function($scope) {
  $scope.todos = [
    {
      face : 'http://lorempixel.com/50/50/people',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: ' Ill be in your neighborhood doing errands'
    },
    {
      face : 'http://lorempixel.com/50/50/people',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: ' Ill be in your neighborhood doing errands'
    },
    {
      face : 'http://lorempixel.com/50/50/people',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: ' Ill be in your neighborhood doing errands'
    },
    {
      face : 'http://lorempixel.com/50/50/people',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: ' Ill be in your neighborhood doing errands'
    },
    {
      face : 'http://lorempixel.com/50/50/people',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: ' Ill be in your neighborhood doing errands'
    },
  ];
});
