'use strict';

/**
 * @ngdoc function
 * @name damienRemarsTestWopataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the damienRemarsTestWopataApp
 */
angular.module('damienRemarsTestWopataApp')
  .controller('MainCtrl', ['$scope', 'fsService', function ($scope, fsService) {

  	fsService.async().then(function(data){
  		console.log(data);
    	//$scope.items = data.response.groups[0].items;

    	$scope.venues = [];

    	data.response.groups[0].items.map(function(item){

    		$scope.venues.push(item.venue);
    	});
    	console.log($scope.venues);
  	});
  	
  }]);
