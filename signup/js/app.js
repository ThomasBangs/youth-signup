var app = angular.module("sportsSignUpApp", ["ngRoute"]);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home',
        controller: ''
      }).
      when('/about', {
        templateUrl: 'partials/about',
        controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
