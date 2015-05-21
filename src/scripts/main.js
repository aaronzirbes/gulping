var angular = require('angularjs');

angular.module('bitchPlease')
  .directive('supBitch', function() {
    return {
      restrict: 'E',
      template: '<h1>Your Mom</h1>'
    };
  });
