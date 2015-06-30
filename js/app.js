var apiBrowserApp = angular.module('app', 
  ['ngRoute', 'apiBrowserControllers', 'apiBrowserDirectives', 'ngPrettyJson'])

apiBrowserApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/api/:apilink', {
      templateUrl: 'api_details.html',
      controller: 'ApiDetailController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);