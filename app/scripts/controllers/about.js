'use strict';

/**
 * @ngdoc function
 * @name testFoursquare.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testFoursquare
 */
angular.module('test-foursquare')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
