angular.module('mod1', [])

.factory('service1', ['$http', function($http) {
  return {
    get: function(item) {
      return $http.get('some/url/' + item.id);
    }
  };
}]);