var angular = require('angularjs');

var modules = [];

angular.module('bitchPlease', modules)
  .directive('supBitch', function() {
    return {
      restrict: 'E',
      template: '<h1>Your Mother</h1>'
    }
  })
  .service('versionService', require('./services/version-service/'))
  .controller('versionController',require('./controllers/version-controller/'));

