module.exports = function($scope, versionService) {
  versionService.getVersions()
    .then(function(response) {
      $scope.versions = response.data;
    });
};
