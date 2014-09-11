'use strict';

/**
 * @ngdoc function
 * @name damienRemarsTestWopataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the damienRemarsTestWopataApp
 */
angular.module('damienRemarsTestWopataApp')
  .controller('MainCtrl', ['$scope', '$resource', function ($scope, $resource) {
    $resource('https://api.foursquare.com/v2/venues/explore').get({
    	near:"Bordeaux", 
    	oauth_token:"RPLFI1IXWXIPGWFQQ52WNVI00Q5KBOL1EIQMQB1UJM1QYSUZ",
    	v:"20140911"
    }, function(callback){
    	console.log(callback);
    	$scope.items = callback.response.groups[0].items;
    });
  }]);
