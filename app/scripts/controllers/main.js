'use strict';

/**
 * @ngdoc function
 * @name testFoursquare.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFoursquare
 */
angular.module('app')
  .controller('MainCtrl', ['$scope', '$log', 'apiService', function ($scope, $log, apiService) {


    apiService.jsonp(0, 10).then(function(data){
      console.log('ok'+data);
    });
    /*
    apiService.async(0,10)
      .success(function(){

      })
      .error(function(){

      });
  */
    //console.log('call: '+apiService.async(0, 10));
/*
    for(var prop in apiService) {
      $log.log(prop+':'+apiService[prop]);
    }
  	
    $log.log('call: '+apiService.async(0, 10)).then(function(jsonData){

      $log.log(jsonData.data);

      //jsonData = JSON.parse(data);

  		$log.log('...'+jsonData.data);
*/

/*
      $scope.items = [];

      
      for(var i in jsonData.data)
      {
        $log.log('- '+i+':'+jsonData.data[i]);
        $scope.items.push(jsonData[i]);
        for(var prop in jsonData.data[i]){
          $log.log('---'+prop+': '+jsonData.data[i][prop]);
        }
      }
*/
      /*
    	$scope.venues = [];

    	data.response.groups[0].items.map(function(item){

    		$scope.venues.push(item.venue);
    	});

    	$log.log($scope.venues);
      */
  	//});
  	
  }]);
