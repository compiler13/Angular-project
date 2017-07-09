
/**
 * Created by shawon on 7/5/2017.
 */

'use strict';

var module = angular.module('myApp.view1')
module.fc = function (s, f) {
    
};
module.fc('messages', function(){
  var messages = {};

  messages.list = [];

  messages.add = function(x){
    messages.list.push({id: messages.list.length, text: x});
  };

  return messages;
});
