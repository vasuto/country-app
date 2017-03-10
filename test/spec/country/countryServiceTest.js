'use strict';

describe('countryApp.countryService countryService', function() {
    var countryService, httpBackend;

    // Set up the module
    beforeEach(module('countryApp.countryService'));

    beforeEach(inject(function(_countryService_, _$httpBackend_) {
        countryService = _countryService_;
        httpBackend = _$httpBackend_;
    }));


    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('should search for countries by given query string', function() {
        var expectedCountries = [{name: 'Poland', isoCode: 'PL'}, {name: 'Portugal', isoCode: 'P'}];
        httpBackend.when('GET', '/country?search=po')
                            .respond(expectedCountries);
        countryService.search("po").then(function(countries) {
            expect(countries).toEqual(expectedCountries);
        });
        httpBackend.flush();
    });


    it('should send countries to server', function() {
        var selectedCountries = [{isoCode: 'PL'}, {isoCode: 'P'}];
        httpBackend.expectPOST('/selectedCountries', selectedCountries).respond(200, '');
        countryService.select(selectedCountries).then(function(response) {
            expect(response.status).toEqual(200);
        });
        httpBackend.flush();
    });
});