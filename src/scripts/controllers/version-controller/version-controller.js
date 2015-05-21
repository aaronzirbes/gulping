module.exports = function($scope, versionService) {
  versionService.getVersions()
    .then(function(response) {
      console.log("versions: ", response.data);
      $scope.versions = response.data;
    });
};
