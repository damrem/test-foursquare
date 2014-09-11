'use strict';

describe('Service: FoursquareExploreVenueService', function () {

  // load the service's module
  beforeEach(module('damienRemarsTestWopataApp'));

  // instantiate service
  var FoursquareExploreVenueService;
  beforeEach(inject(function (_FoursquareExploreVenueService_) {
    FoursquareExploreVenueService = _FoursquareExploreVenueService_;
  }));

  it('should do something', function () {
    expect(!!FoursquareExploreVenueService).toBe(true);
  });

});
