'use strict';

angular.module('countryApp.countryService', [])
    .factory('countryService', ['$http', function($http) {
        var exports = {};

        /**
         * Calls the server to search for countries by given query string.
         *
         * @param searchText query search text
         */
        exports.search = function (searchText) {
            return $http.get('/country', {params: { search: searchText }}).then(function(response) {
                return response.data;
            }, function(error) {
                return [];
            });
        }

        /**
         * Calls the server to save selected countries.
         *
         * @param countries selected countries
         */
        exports.select = function (countries) {
            return $http.post('/selectedCountries', countries);
        }

        return exports;
 }]);