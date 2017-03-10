'use strict';

angular.module('countryApp.country', ['ngMaterial'])
    .directive('search', ['countryService', function(countryService) {
    return {
        restrict: 'E',
        templateUrl: 'components/country/inputSearchDirective.html',
        scope: {
            selectedCountries: '=',
            responseMessage: '='
        },
        controller: ['$scope', 'countryService', '_',
            function($scope, countryService, _) {

            $scope.simulateQuery = false;
            $scope.isDisabled    = false;
            $scope.noCache = true;
            $scope.states        = loadAll();
            $scope.querySearch   = querySearch;
            $scope.selectedItemChange = selectedItemChange;
            $scope.searchTextChange   = searchTextChange;

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for countries and returns list of countries which match query.
             *
             * @param query query string
             * @return list of countries
             */
            function querySearch (query) {
                if (query.length < 2) {
                    return [];
                }
                return countryService.search(query);
            }

            function searchTextChange(text) {
                if (text && text.match(/\d+/g)) {
                    $scope.responseMessage = 'Typed text cannot contain number.';
                } else {
                    $scope.responseMessage = '';
                }
            }

            /**
             * Pushes the selected item to the list of selected countries.
             *
             * @param item selected item
             */
            function selectedItemChange(item) {
                $scope.responseMessage = '';
                if(item) {
                    var indexOf = _.findIndex($scope.selectedCountries, function(country) {
                                            return country.isoCode === item.isoCode;
                                        });
                    if(indexOf < 0) {
                        $scope.selectedCountries.push(item);
                    }
                    $scope.searchText = '';
                }
            }

            /**
             * Returns empty list.
             *
             * @return empty list
             */
            function loadAll() {
                return [];
            }
        }]
    };
}]);