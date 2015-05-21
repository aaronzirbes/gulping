module.exports = function($http) {
  return {
    getVersions: function() {
      return $http.get('http://version-dev.connectedfleet.io:8080/info');
      //return $http.get('http://localhost:8000/info.json');
    }
  };
};
