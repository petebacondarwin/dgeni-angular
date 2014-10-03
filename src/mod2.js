angular.module('mod1', ['mod2'])

.controller('MyCtrl', ['$scope', 'service1', function($scope, service1) {
  $scope.getItem = function() {
    service1.get($scope.itemId).then(function(item) {
      $scope.item = item;
    });
  };
}])

.directive('directive1', function() {
  return {
    restrict: 'E',
    scope: {
      attr1: '='
    },
    templateUrl: 'some/template/url',
    link: function(scope, element) {

    }
  };
});