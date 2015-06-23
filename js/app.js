angular.module('app', [])
 
.directive('apiList', function() {
    return {
      scope: {},
      replace: true,
      controller: function($scope, $element) {
        var panes = $scope.panes = [];

        panes.push({'title':"Item 1", "selected":false});
        panes.push({'title':"Item 2", "selected":false});
        panes.push({'title':"Item 3", "selected":false});
        panes.push({'title':"Item 4", "selected":false});
        panes.push({'title':"Item 5", "selected":false});
 
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
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>'
    };
  });