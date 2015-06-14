var app = angular.module("sportsSignUpApp", ["ngRoute"]);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: ''
      }).
      when('/about', {
        templateUrl: 'partials/about.html ',
        controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
