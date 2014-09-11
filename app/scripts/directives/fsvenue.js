'use strict';

/**
 * @ngdoc directive
 * @name damienRemarsTestWopataApp.directive:fsVenue
 * @description
 * # fsVenue
 */
angular.module('damienRemarsTestWopataApp')
  .directive('fsVenue', function () {
    return {
      templateUrl: 'views/fsvenue.html',
      restrict: 'A',
      scope: {venue:'=fsVenue'}
    };
  });
