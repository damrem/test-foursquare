'use strict';

describe('Directive: fsLocation', function () {

  // load the directive's module
  beforeEach(module('damienRemarsTestWopataApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fs-location></fs-location>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fsLocation directive');
  }));
});
