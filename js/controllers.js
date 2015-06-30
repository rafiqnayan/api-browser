var apiBrowserControllers = angular.module('apiBrowserControllers', []);

apiBrowserControllers.controller('ApiDetailController', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {

		$http.get('/data/details/sample_api.json').success(function(data) {
			$scope.data = data;
		});

	}
]);