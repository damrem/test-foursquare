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

    $scope.page = 1;

    

    $scope.gotoPage = function(pg){
      $scope.page = pg;
    };

    apiService.jsonp(($scope.page-1)*10, 100).then(function(jsondata){
      console.log('ok'+jsondata);

      $scope.pages = [];
      var currentpage = 1;
      var nbPages = Math.ceil(jsondata.recordsFiltered / 10);

      for(var j=0; j<nbPages; j++)
      {
        $scope.pages.push(currentpage);
        currentpage++;
      }

      for(var prop in jsondata){
        console.log(prop+':'+jsondata[prop]);
      }

      $scope.items = [];
      for(var i in jsondata.data){
        console.log(i+':'+jsondata.data[i]);
        $scope.items.push(jsondata.data[i]);
      }
    });
    
  	
  }]);
