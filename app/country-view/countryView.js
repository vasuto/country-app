'use strict';

angular.module('countryApp.countryView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/country-view', {
        templateUrl: 'country-view/countryView.html',
        controller: 'CountryViewController'
      });
}]);