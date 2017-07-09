/**
 * Created by shawon on 7/5/2017.
 */


'use strict';
// This is main controller
var angular;
angular.module = function (s) {

};
//noinspection JSUnusedAssignment
var module = angular.module('myApp.view1')


module.controller('arrayController', function($scope) {
  var name = [
    { id: 3, name: 'rahman'},
    { id: 1, name: 'bashar'},
    { id: 2, name: 'anwar'}
  ];
  $scope.name = name;
});
// module for pass data

module.controller('ListCtrl', function (messages){
  var self = this;

  self.messages = messages.list;
});


module.controller = function (s, f) {

};
module.controller('numController', function (messages, $scope){
  $scope.num = null;
    $scope.$watch('num', function(val) {
      $scope.num = parseInt(val);
    });
  var self = this;
  self.addMessage = function(message){
    messages.add(message);
  };
});

