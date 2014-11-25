/**
 * @ngdoc module
 * @alias mod2
 * @module mod2
 * @description
 * Controllers and directives
 */
angular.module('mod2', ['mod1'])

/**
 * @ngdoc function
 * @alias MyCtrl
 * @requires $scope
 * @requires service1
 * @description
 * Attaches the `getItem` helper to the scope
 */
.controller('MyCtrl', ['$scope', 'service1', function($scope, service1) {
  $scope.getItem = function() {
    service1.get($scope.itemId).then(function(item) {
      $scope.item = item;
    });
  };
}])

/**
 * @ngdoc directive
 * @alias directive1
 * @param {*} attr1 an atrribute
 * @description
 * Does something special with the DOM
 */
.directive('directive1', function() {
  return {
    restrict: 'E',
    scope: {
      attr1: '='
    },
    templateUrl: 'some/template/url',
    link: function(scope, element) {
      var div = angular.element('<div></div>');
    }
  };
});
