'use strict';

/**
 * @ngdoc function
 * @name testFoursquare.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFoursquare
 */
 angular.module('app')
 .controller('MainCtrl', ['$scope', '$routeParams', 'apiService', function ($scope, $routeParams, apiService) {

  $scope.gotoPage = function(pg){

    console.log('.gotoPage('+pg);
    $scope.page = pg;
    console.log($scope.page);

    console.log('initiating the call');
    apiService.jsonp(($scope.page-1)*10, 10, 

      function(jsondata){
      console.log('ok: '+jsondata);

      $scope.pages = [];
      var currentpage = 1;
      var nbPages = Math.ceil(jsondata.recordsFiltered / 10);

      for(var j=0; j<nbPages; j++)
      {
        $scope.pages.push(currentpage);
        currentpage++;
      }

      for(var prop in jsondata){
        console.log('in jsondata: '+prop+':'+jsondata[prop]);
      }

      $scope.items = [];
      console.log('nbDatas='+jsondata.data.length);
      for(var i in jsondata.data){
        console.log('plop');
        console.log(i+':'+jsondata.data[i]);
        //console.log(jsondata.data[i].Title);
        $scope.items.push(jsondata.data[i]);
      }
    },

    function error(err){
      console.log('ERROR('+err);
    }


    );
  };

  $scope.gotoPage(1);
    

}]);
