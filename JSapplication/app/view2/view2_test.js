'use strict';

describe('myApp.view2 module', function() {

    function beforeEach(module) {

    }

    beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');

        function expect(view2Ctrl) {

        }

        //noinspection JSUnresolvedFunction
        expect(view2Ctrl).toBeDefined();
    }));

  });
});