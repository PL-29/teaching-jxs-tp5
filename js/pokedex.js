var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('controller1', ['$scope', '$log', function($scope, $log) {
  $scope.ecrireLogs = function(){
	  $log.debug('Godis & PL');
  }
  
  $scope.pokemons = [
          {name:'pikachu', id:'1'},
          {name:'carapuce', id:'2'},
          {name:'salamèche', id:'3'},
          {name:'bulebizar', id:'4'}]
  
}]);
