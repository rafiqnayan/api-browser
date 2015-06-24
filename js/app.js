var apiBrowserApp = angular.module('app', ['ngRoute','apiBrowserControllers'])
 
.directive('apiList', ['$location', '$http', function(location, $http) {
    return {
      scope: {},
      replace: true,
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
        
        $http.get('data/api_list.json').success(function(apiList){
          apiList.forEach(function(entry){
            if(location.path().split('/')[2] === entry.link){
              entry.selected = true;
            }
            panes.push(entry);
          });
        });

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
      },
      template:
          '<ul class="nav nav-sidebar">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="#/api/{{pane.link}}" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>'
    };
  }]);

apiBrowserApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/api/:apiId', {
        templateUrl: 'api_details.html',
        controller: 'ApiDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);