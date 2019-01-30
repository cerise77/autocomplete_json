
var routing = angular.module('RoutingApp', ['ngRoute', 'ui.bootstrap'])
  .config( ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/first', {
    templateUrl: 'views/first.html',
    controller:'firstController'
  })
  .otherwise({
    redirectTo: '/first'
  });
}]);
