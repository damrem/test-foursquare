'use strict';

angular.module('app')
  .directive('appItem', function () {
  	console.log('DIRECTIVE');
    return {
      templateUrl: 'views/item.html',
      restrict: 'A',
      scope: {item:'=appItem'}
    };
  });
