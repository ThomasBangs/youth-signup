var app = angular.module("sportsSignUpApp", ["ngRoute", "firebase"]);


app.constant('API_URL', 'https://sportssignup.firebaseio.com');

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
        templateUrl: "partials/profile.html", controller: "ProfileCtrl", 
        resolve: {
              currentAuth: function(Auth) {
                return Auth.$waitForAuth();
            }
          }

      })

      .when('/player-registration', {
        templateUrl: 'partials/playerRegistration.html',
        controller: "ProfileCtrl",

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

app.service('myService', function(){
  this.editTask = {}; // object to share
  this.editKey = -1; // index of the object in the array
  this.listRef = null; // ref to the Firebase array
});
