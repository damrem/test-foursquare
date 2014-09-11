'use strict';

/**
 * @ngdoc directive
 * @name testFoursquare.directive:fsVenue
 * @description
 * # fsVenue
 */
angular.module('test-foursquare')
  .directive('fsVenue', function () {
    return {
      templateUrl: 'views/fsvenue.html',
      restrict: 'A',
      scope: {venue:'=fsVenue'}
    };
  });
