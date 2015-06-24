var apiBrowserControllers = angular.module('apiBrowserControllers', []);

apiBrowserControllers.controller('ApiDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.apiId = $routeParams.apiId;
    // console.log($scope.panes);
  }]);