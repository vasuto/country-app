xdescribe('countryApp.country CountryViewController', function() {

    var $controller, $scope, countryService, countryController, _;

    beforeEach(module('countryApp.country'));

    beforeEach(function() {
        module(function($provide) {
            $provide.service('countryService', function() {
                this.countryService = jasmine.createSpy('search');
            });
            $provide.service('_', function() {});
        });
    });

    beforeEach(inject(function($rootScope, $controller, _countryService_, ___) {
        $scope = $rootScope.$new();
        countryService = countryService;
        _ = ___;
        countryController = $controller('CountryViewController', {
            '$scope': $scope,
            '_': _,
            'countryService': countryService
        });
    }));

    it('should define controller with addSelectedCountries and removeSelected functions', function() {
        expect(countryController).toBeDefined();
        expect(countryController.addSelectedCountries).toBeDefined();
        expect(countryController.removeSelected).toBeDefined();
    });

    it('should call remote API and add selected countries', function() {
        $scope.addSelectedCountries();
        expect(countryService.select).toHaveBeenCalled();
    });

    it('should remove chosen country from selected list of countries', function() {
        spyOn(_, 'remove').and.callFake(function(arguments, can, be, received) {
              $scope.selectedCountries = [{name: 'Portugal', isoCode: 'P'}];
        });
        $scope.selectedCountries = [{name: 'Poland', isoCode: 'PL'}, {name: 'Portugal', isoCode: 'P'}];
        $scope.removeSelected('PL');
        expect($scope.selectedCountries.length).toBe(1);
    });

});