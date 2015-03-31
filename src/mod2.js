/**
 * @ngdoc module
 * @name mod2
 * @description
 *
 * Controllers and directives
 *
 */
angular.module('mod2', ['mod1'])

/**
 * @ngdoc type
 * @name MyCtrl
 * @module mod2
 * @description
 *
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
 * @name directive1
 * @module mod2
 * @description
 *
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
