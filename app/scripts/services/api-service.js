'use strict';

angular.module('app')
  .factory('apiService', ['$resource', function fsService($resource) {

	    var service = {
	    async: function(start, limit) {
	      // $http returns a promise, which has a then function, which also returns a promise
	      
	      return $resource('scripts/services/data.json')
	      .get({start:start, limit:limit})
	      .$promise;
	    }
	  };
	  return service;

	 // return 
  }]);
