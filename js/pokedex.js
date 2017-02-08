var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('controller1', ['$scope', '$log', '$http', function($scope, $log, $http) {
  $scope.ecrireLogs = function(){
	  $log.debug('Godis & PL');
  }
  
  $scope.pokemons = $http({
	  method: 'GET',
	  url: 'http://pokeapi.co/api/v1/pokedex/'
	}).then(function successCallback(response) {
		$scope.pokemons = response.data;
		console.log(response.data.objects);
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
  
}]);
