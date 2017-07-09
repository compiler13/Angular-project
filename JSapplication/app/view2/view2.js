'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when = function (s, param2) {

    };
    $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
  });
}])
