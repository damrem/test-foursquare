'use strict';
console.log('api-directive.js');
angular.module('app')
  .directive('appItem', function () {
  	console.log('DIRECTIVE');
    return {
      templateUrl: 'views/item.html',
      restrict: 'A',
      scope: {item:'=appItem'}
    };
  });
