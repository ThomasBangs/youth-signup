var app = angular.module("sportsSignUpApp", ["ngRoute", "firebase"]);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: ''})

      .when('/about', {
        templateUrl: 'partials/about.html ',
        controller: ''})

      .when("/register", {
        templateUrl: "partials/register.html", controller: "AuthCtrl"})

      .when('/player-registration', {
        templateUrl: 'partials/playerRegistration.html',
        controller: 'registrationController',
        
        resolve: {
              currentAuth: function(Auth) {
                return Auth.$waitForAuth();
            }
          }
      })
      
      .when("/login", {
        templateUrl: "partials/login.html", controller: "AuthCtrl"})
      
      .when("/formsuccess", {
        templateUrl: "partials/formsuccess.html", controller: ""
      })

      .otherwise({
        redirectTo: '/'
      });
  }]);
app.constant('API_URL', 'https://sportssignup.firebaseIO.com');