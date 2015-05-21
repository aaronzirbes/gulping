module.exports = function(versionService) {
  versionService.getVersions()
    .then(function(versions) {
      console.log("versions: ", versions);
    });
};
