var apiBrowserApp = angular.module('app', ['ngRoute','apiBrowserControllers', 'apiBrowserDirectives'])
 
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