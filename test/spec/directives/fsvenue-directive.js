'use strict';

describe('Directive: fsLocation', function () {

  // load the directive's module
  beforeEach(module('test-foursquare'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fs-venue></fs-venue>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the fsVenue directive');
  }));
});
