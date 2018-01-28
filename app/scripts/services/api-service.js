'use strict';

angular.module('app')
.service('apiService', ['$http', function($http) {
	console.log('service');
	var callbackId=-1;
	return {
			jsonp: function(start, limit, successCallback, errorCallback){
				console.log('jsonp', start, limit);
				var url='http://administration.dolist.net/job/test/tech/ux/code/webservice.php';
				callbackId++;
				return $http.jsonp(url+'?start='+start+'&limit='+limit+'&callback=angular.callbacks._'+callbackId)
				.success(successCallback)
				.error(errorCallback);
				/*.then(function(result){
					console.log('result');
					return result.data;
				});*/
				
			}
		};
}]);
