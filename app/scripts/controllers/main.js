'use strict';

/**
 * @ngdoc function
 * @name testFoursquare.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFoursquare
 */
angular.module('app')
  .controller('MainCtrl', ['$scope', 'apiService', function ($scope, apiService) {

  	apiService.async().then(function(jsonData){

      console.log(jsonData.data);

      //jsonData = JSON.parse(data);

  		console.log('...'+jsonData.data);

      $scope.items = [];
      for(var i in jsonData.data)
      {
        console.log('- '+i+':'+jsonData.data[i]);
        $scope.items.push(jsonData[i]);
        for(var prop in jsonData.data[i]){
          console.log('---'+prop+': '+jsonData.data[i][prop]);
        }
      }
      /*
    	$scope.venues = [];

    	data.response.groups[0].items.map(function(item){

    		$scope.venues.push(item.venue);
    	});

    	console.log($scope.venues);
      */
  	});
  	
  }]);
