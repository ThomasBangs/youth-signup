var app = angular.module("sportsSignUpApp", ["ngRoute", "firebase"]);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: ''})

      . when('/about', {
        templateUrl: 'partials/about.html ',
        controller: ''})

      .when("/register", {
        templateUrl: "partials/register.html", controller: "AuthCtrl"})

      . when('/player-registration', {
        templateUrl: 'partials/playerRegistration.html',
        controller: 'registrationController'})
      
      .when("/login", {
        templateUrl: "partials/login.html", controller: "AuthCtrl"})

      . otherwise({
        redirectTo: '/'
      });
  }]);
app.constant('API_URL', 'https://vivid-inferno-3744.firebaseIO.com');