'use strict';

describe('countryApp.country inputSearchDirective', function() {
    var $compile,
        $rootScope,
        countryService;

    // Load the countryApp module, which contains the directive
    beforeEach(module('countryApp.country'));
    // Load the countryApp template module to have templates available for tests
    beforeEach(module("countryApp.templates"));


    beforeEach(function() {
        module(function($provide) {
            $provide.service('countryService', function() {
                this.countryService = jasmine.createSpy('search');
            });
            $provide.service('_', function() {});
        });
    });

    beforeEach(inject(function(_$compile_, _$rootScope_, _countryService_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        countryService = _countryService_;
    }));

    it('should replace the element with the autocomplete element', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile('<search selected-countries="selectedCountries" response-Message="responseMessage"></search>')($rootScope);
        $rootScope.$digest();
        // Check that the compiled element contains the autocomplete element
        expect(element.html()).toContain('md-autocomplete');
    });
});