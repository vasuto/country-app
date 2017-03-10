'use strict';

angular.module('countryApp.countryView')
    .controller('CountryViewController', ['$scope', '_', 'countryService', function($scope, _, countryService) {
        $scope.selectedCountries = [];
        $scope.responseMessage = '';

        $scope.addSelectedCountries = function() {
            if ($scope.selectedCountries.length === 0) {
                $scope.responseMessage = 'Please, select country.';
            } else {
                countryService.select($scope.selectedCountries.map(function(selectedCountry) {
                    return {
                        'isoCode': selectedCountry.isoCode
                    };
                })).then(function(response) {
                    if(response.status === 200) {
                        $scope.responseMessage = 'Success!'
                    }
                });
            }
        };

        $scope.removeSelected = function(countryToRemove) {
            $scope.responseMessage = '';
            _.remove($scope.selectedCountries, function(country) {
                return country.name === countryToRemove.name;
            });
        };

}]);