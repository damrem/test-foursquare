'use strict';

/**
 * @ngdoc function
 * @name testFoursquare.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFoursquare
 */
angular.module('test-foursquare')
  .controller('MainCtrl', ['$scope', 'fsExploreVenueService', function ($scope, fsExploreVenueService) {

  	fsExploreVenueService.async().then(function(data){

  		console.log(data);

    	$scope.venues = [];

    	data.response.groups[0].items.map(function(item){

    		$scope.venues.push(item.venue);
    	});

    	console.log($scope.venues);
  	});
  	
  }]);
