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

      .when("/profile", {
        templateUrl: "partials/profile.html", controller: "formCtrl"})

      .when('/player-registration', {
        templateUrl: 'partials/playerRegistration.html',
        controller: 'formCtrl',

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