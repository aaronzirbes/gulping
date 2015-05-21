module.exports = function($http) {
  return {
    getVersions: function() {
      return $http.get('http://version-dev.connectedfleet.io:8080/info');
    }
  };
};
