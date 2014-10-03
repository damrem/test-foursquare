'use strict';

angular.module('app')
.service('apiService', ['$http', function($http) {

	return {
			jsonp: function(start, limit){
				var url='http://administration.dolist.net/job/test/tech/ux/code/webservice.php';
				return $http.jsonp(url+'?start='+start+'&limit='+limit+'&callback=angular.callbacks._0')
				.then(function(result){
					return result.data;
				});
			}
		};
}]);
