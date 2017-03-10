'use strict';

// Declare app level module which depends on views, and components
angular.module('countryApp', [
  'ngRoute',
  'countryApp.countryView',
  'countryApp.country',
  'countryApp.countryService'
])
.constant('_', window._)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/country-view'});
}]);
