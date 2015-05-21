var angular = require('angularjs');

var modules = [];

angular.module('bitchPlease', modules)
  .directive('supBitch', function() {
    return {
      restrict: 'E',
      template: '<h1>Your Mother</h1>'
    };
  });
