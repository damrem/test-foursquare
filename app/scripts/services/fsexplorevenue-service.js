'use strict';

/**
 * @ngdoc service
 * @name damienRemarsTestWopataApp.FoursquareExploreVenueService
 * @description
 * # FoursquareExploreVenueService
 * Service in the damienRemarsTestWopataApp.
 */
angular.module('test-foursquare')
  .factory('fsExploreVenueService', ['$resource', function fsService($resource) {

	    var service = {
	    async: function() {
	      // $http returns a promise, which has a then function, which also returns a promise
	      return $resource('https://api.foursquare.com/v2/venues/explore')
	      .get({near:"Bordeaux", oauth_token:"RPLFI1IXWXIPGWFQQ52WNVI00Q5KBOL1EIQMQB1UJM1QYSUZ", v:"20140911"})
	      .$promise;
	    }
	  };
	  return service;
  }]);
