var angular = require('angularjs');

var modules = [];

angular.module('omnicientVersion', modules)
  .directive('supBitch', function() {
    return {
      restrict: 'E',
      template: '<h1>Omnicient Version Information</h1>'
    }
  })
  .service('versionService', require('./services/version-service/'))
  .controller('versionController',require('./controllers/version-controller/'));

