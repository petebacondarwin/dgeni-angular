/**
 * Contains helper services
 */
angular.module('mod1', [])

.factory('service1', ['$http', function($http) {
  return {
    /**
     * Get some item from the web
     * @param  {string} itemId The id of the items to retrieve
     * @return {Promise}       A promise to the returned item.
     */
    get: function(itemId) {
      return $http.get('some/url/' + itemId).then(function(response) {
        return response.data;
      });
    }
  };
}]);